#! /usr/bin/env node

const { Client } = require("pg");
const dbConfig = require("../config/dbconfig");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  username VARCHAR(100) NOT NULL,
  added TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() 
);

INSERT INTO messages (text, username) 
VALUES ('Hello world!', 'Stolir')
;
`;

async function main() {
  console.log("seeding...");
  const client = new Client(dbConfig);
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding complete!");
  } catch (error) {
    console.log(`Error seeding the database: ${error}`);
  } finally {
    await client.end();
  }
}

main();
