const { db } = require("@vercel/postgres");
require("dotenv").config();

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    on_email_list BOOLEAN DEFAULT false
  );
`;

const createMessagesTable = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message TEXT NOT NULL
  );
`;

// Assuming you have usersData defined somewhere as shown previously
const usersData = [{ email: "user0@example.com", onEmailList: true }];

// Define messagesData properly here
const messagesData = [
  { userId: 1, message: "Hello from user 1" },
  // Make sure userId corresponds to an existing user in the users table
];

async function seedUsers(client) {
  await client.query(createUsersTable);
  await Promise.all(
    usersData.map((user) =>
      client.query(
        "INSERT INTO users (email, on_email_list) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING",
        [user.email, user.onEmailList]
      )
    )
  );
  console.log("Users seeded");
}

async function seedMessages(client) {
  await client.query(createMessagesTable);
  await Promise.all(
    messagesData.map((msg) =>
      client.query("INSERT INTO messages (user_id, message) VALUES ($1, $2)", [
        msg.userId,
        msg.message,
      ])
    )
  );
  console.log("Messages seeded");
}

async function main() {
  const client = await db.connect();
  try {
    await seedUsers(client);
    await seedMessages(client); // This line throws the error if messagesData isn't defined
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    client.release();
  }
}

main();
