const messagesModel = require("../models/messagesModel");

const getMessageBoard = (req, res) => {
  const messages = messagesModel.getAll();
  res.render("index", { title: "Message Board", messages });
};

const getNewMessageForm = (req, res) => {
  res.render("newMessage", { title: "Post a new message!" });
};

const getMessageDetails = (req, res) => {
  const { messageId } = req.params;
  const message = messagesModel.getMessage(messageId);
  res.render("messageDetails", { message });
};

const postNewMessage = (req, res) => {
  const messageInfo = req.body;
  messagesModel.addNewMessage(messageInfo.user, messageInfo.message);
  res.redirect("/");
};

module.exports = {
  getMessageBoard,
  getNewMessageForm,
  getMessageDetails,
  postNewMessage,
};
