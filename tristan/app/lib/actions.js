"use server";
import validator from "validator";
import { sql } from "@vercel/postgres";

export async function createMessage(formData) {
  const email = formData.get("email");
  const messageContent = formData.get("message");
  // Ensure checkbox handling matches client-side expectations
  const emailList = formData.get("emailList") === "on";

  try {
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
        INSERT INTO users (email, on_email_list)
        VALUES (${sanitizedEmail}, ${emailList})
        RETURNING id`;
      user_id = insertUserResult.rows[0].id;
    } else {
      user_id = userResult.rows[0].id;
      await sql`
      UPDATE users
      SET on_email_list = ${emailList}
      WHERE id = ${user_id}`;
    }

    // Insert the message into the database
    await sql`
      INSERT INTO messages (user_id, message)
      VALUES (${user_id}, ${sanitizedMessage})`;

    // Provide feedback for successful operation
    return {
      success: true,
      message: "Message created successfully",
      userId: user_id,
    };
  } catch (error) {
    console.error("Error creating message:", error);
    // Provide feedback for failed operation
    return { success: false, error: error.message };
  }
}

export async function createEmail(formData) {
  let email = formData.get("email");

  try {
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

    // Provide feedback for successful operation
    return { success: true, message: "Email processed successfully" };
  } catch (error) {
    console.error("Error processing email:", error);
    // Provide feedback for failed operation
    return { success: false, error: error.message };
  }
}

// Function to delete a message by its ID
export async function deleteMessageById(messageId) {
  try {
    await sql`DELETE FROM messages WHERE id = ${messageId}`;
    console.log(`Message with ID ${messageId} has been deleted.`);
    return {
      success: true,
      message: `Message with ID ${messageId} has been deleted.`,
    };
  } catch (error) {
    console.error("Error deleting message:", error);
    return { success: false, error: error.message };
  }
}

// Function to delete a user by their email
export async function deleteUserByEmail(email) {
  try {
    // Sanitize the email
    const sanitizedEmail = validator.normalizeEmail(email) || "";
    if (!validator.isEmail(sanitizedEmail)) {
      throw new Error("Email is invalid");
    }

    await sql`DELETE FROM users WHERE email = ${sanitizedEmail}`;
    console.log(`User with email ${sanitizedEmail} has been deleted.`);
    return {
      success: true,
      message: `User with email ${sanitizedEmail} has been deleted.`,
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, error: error.message };
  }
}
