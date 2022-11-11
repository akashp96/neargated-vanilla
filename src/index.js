const rootElement = document.querySelector(".vanilla-chatbot");

const renderChatBot = (rootElement, config, messageParser, actionProvider) => {
  const header = document.createElement("div");
  header.textContent = `Conversation with ${config.botName}`;
  header.classList.add("title");

  rootElement.appendChild(header);
};

const config = {
  botName: "Nalsh",
};

renderChatBot(rootElement, config);
