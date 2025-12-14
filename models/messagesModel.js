const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getAll = () => messages;

const addNewMessage = (text, user) => {
  messages.push({ id: messages.length + 1, text, user, added: new Date() });
};

const getMessage = (id) => {
  return messages.find((message) => message.id === Number(id));
};

module.exports = { getAll, addNewMessage, getMessage };
