console.log("Hi Akash");

const rootElement = document.querySelector(".vanilla-chatbot");

const header = document.createElement("p");
header.textContent = "Akash 🔢";
header.classList.add("title");

rootElement.appendChild(header);
