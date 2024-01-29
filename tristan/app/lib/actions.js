"use server";
import validator from "validator";
import { sql } from "@vercel/postgres";

export async function createMessage(formData) {
  const email = formData.get("email");
  const messageContent = formData.get("message");

  // Data sanitization and validation
  const sanitizedEmail = validator.normalizeEmail(email) || "";
  const sanitizedMessage = validator.escape(messageContent);
  if (!validator.isEmail(sanitizedEmail)) {
    throw new Error("Invalid email address");
  }
  if (
    !sanitizedMessage ||
    sanitizedMessage.length < 3 ||
    sanitizedMessage.length > 2200
  ) {
    throw new Error("Invalid message length");
  }

  // Check if user exists, if not add them
  let userResult =
    await sql`SELECT id FROM users WHERE email = ${sanitizedEmail}`;
  let user_id;
  if (userResult.rowCount === 0) {
    const insertUserResult = await sql`
      INSERT INTO users (email)
      VALUES (${sanitizedEmail})
      RETURNING id`;
    user_id = insertUserResult.rows[0].id;
  } else {
    user_id = userResult.rows[0].id;
  }

  // Insert the message into the database
  await sql`
    INSERT INTO messages (user_id, message)
    VALUES (${user_id}, ${sanitizedMessage})`;
}

export async function createEmail(formData) {
  let email = formData.get("email");

  // Sanitize and validate the email
  const sanitizedEmail = validator.normalizeEmail(email) || "";

  if (!validator.isEmail(sanitizedEmail)) {
    throw new Error("Email is invalid");
  }

  // Check if the user already exists
  let userResult =
    await sql`SELECT id FROM users WHERE email = ${sanitizedEmail}`;
  if (userResult.rowCount === 0) {
    // User does not exist, insert new user
    await sql`
      INSERT INTO users (email)
      VALUES (${sanitizedEmail})`;
    console.log("New user added to the database");
  } else {
    console.log("User already exists in the database");
  }
}
