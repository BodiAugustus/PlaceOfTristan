const { db } = require("@vercel/postgres");
require("dotenv").config();

// Define SQL schema for tables
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
  );
`;

const createMessagesTable = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message TEXT NOT NULL
  );
`;

// Define seed data
const usersData = [{ email: "user0@example.com" }];
const messagesData = [{ userId: 1, message: "Hello from user 1" }]; // Assuming user with ID 1 exists

// Seed functions
async function seedUsers(client) {
  await client.query(createUsersTable);
  await Promise.all(
    usersData.map((user) => {
      return client.query(
        "INSERT INTO users (email) VALUES ($1) ON CONFLICT (email) DO NOTHING",
        [user.email]
      );
    })
  );
  console.log("Users seeded");
}

async function seedMessages(client) {
  await client.query(createMessagesTable);
  await Promise.all(
    messagesData.map((msg) => {
      return client.query(
        "INSERT INTO messages (user_id, message) VALUES ($1, $2)",
        [msg.userId, msg.message]
      );
    })
  );
  console.log("Messages seeded");
}

// Main function
async function main() {
  const client = await db.connect();
  try {
    await seedUsers(client);
    await seedMessages(client); // Seed messages
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    client.release();
  }
}

main();
