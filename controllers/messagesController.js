const messagesModel = require("../models/messagesModel");

const getMessageBoard = (req, res) => {
  const messages = messagesModel.getAll();
  res.render("index", { title: "Message Board", messages });
};

module.exports = { getMessageBoard };
