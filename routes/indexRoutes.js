const { Router } = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messagesController");

indexRouter.get("/", messagesController.getMessageBoard);

module.exports = indexRouter;
