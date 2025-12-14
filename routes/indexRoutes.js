const { Router } = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messagesController");

indexRouter.get("/", messagesController.getMessageBoard);
indexRouter.get("/messages/:messageId", messagesController.getMessageDetails);
indexRouter.get("/new", messagesController.getNewMessageForm);
indexRouter.post("/new", messagesController.postNewMessage);

module.exports = indexRouter;
