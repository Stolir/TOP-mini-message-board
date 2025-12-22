const pool = require("../database/pool");

async function getAll() {
  const query = "SELECT * FROM messages";

  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (err) {
    console.error("Error getting messages: ", err);
    throw err;
  }
}

async function addNewMessage(username, text) {
  const query = "INSERT INTO messages (username, text) VALUES ($1, $2)";
  const values = [username, text];

  try {
    await pool.query(query, values);
  } catch (err) {
    console.error("Error inserting message: ", err);
    throw err;
  }
}

async function getMessage(id) {
  const query = "SELECT * FROM messages WHERE id=($1)";
  const values = [id];

  try {
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (err) {
    console.error("Error getting message: ", err);
    throw err;
  }
}

module.exports = { getAll, addNewMessage, getMessage };
