const messagesModel = require("../models/messagesModel");
const { body, validationResult, matchedData } = require("express-validator");

//error messages
const alphaErr = "must only contain letters";

const validateMessage = [
  body("username").trim().isAlpha().withMessage(`Username ${alphaErr}`),
  body("text").trim(),
];

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

const postNewMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newMessage", {
        title: "Post a new message!",
        errors: errors.array(),
      });
    }
    const { username, message } = req.body;
    await messagesModel.addNewMessage(username, message);
    res.redirect("/");
  },
];

// async function postNewMessage(req, res) {
//   const messageInfo = req.body;
//   await messagesModel.addNewMessage(messageInfo.username, messageInfo.message);
//   res.redirect("/");
// }

module.exports = {
  getMessageBoard,
  getNewMessageForm,
  getMessageDetails,
  postNewMessage,
};
