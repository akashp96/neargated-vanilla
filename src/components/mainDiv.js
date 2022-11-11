import { LoginButton, LogoutButton } from "./buttons.js";
import {
  title,
  ParagraphAfterLogin,
  ParagraphBeforeLogin,
} from "./head-para.js";

const rootElement = document.querySelector(".vanilla-chatbot");

const ToggleWindow = () => {
  const mainWindow = document.createElement("div");
  mainWindow.classList.add("outer-div");

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("button-div");

  const Login = LoginButton();
  const Logout = LogoutButton();
  const Title = title();
  const MidtableBefore = ParagraphBeforeLogin();
  const MidtableAfter = ParagraphAfterLogin();

  buttonsDiv.appendChild(Login);
  //   buttonsDiv.appendChild(Logout);
  mainWindow.appendChild(Title);
  //   mainWindow.appendChild(MidtableAfter);
  mainWindow.appendChild(MidtableBefore);
  mainWindow.appendChild(buttonsDiv);
  rootElement.appendChild(mainWindow);
};

export default ToggleWindow;
