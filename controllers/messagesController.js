const messagesModel = require("../models/messagesModel");

async function getMessageBoard(req, res) {
  const messages = await messagesModel.getAll();
  console.log(messages);
  res.render("index", { title: "Message Board", messages });
}

const getNewMessageForm = (req, res) => {
  res.render("newMessage", { title: "Post a new message!" });
};

async function getMessageDetails(req, res) {
  const { messageId } = req.params;
  const message = await messagesModel.getMessage(messageId);
  console.log(message);
  res.render("messageDetails", { message: message[0] });
}

async function postNewMessage(req, res) {
  const messageInfo = req.body;
  await messagesModel.addNewMessage(messageInfo.username, messageInfo.message);
  res.redirect("/");
}

module.exports = {
  getMessageBoard,
  getNewMessageForm,
  getMessageDetails,
  postNewMessage,
};
