import {
  LoginButton,
  LogoutButton,
  LoginLoader,
  Hamburger,
  ApplyDiscount,
} from "./buttons.js";
import {
  title,
  ParagraphAfterLogin,
  ParagraphBeforeLogin,
} from "./head-para.js";

const rootElement = document.querySelector(".vanilla-chatbot");
const CONTRACT_NAME = "rtb_v10.liv1.testnet";

const ToggleWindow = (loggedIn, wallet, currentAccount) => {
  const Loader = LoginLoader();
  const MidtableBefore = ParagraphBeforeLogin();
  const MenuOpen = Hamburger();
  const Discount = ApplyDiscount();

  const mainWindow = document.createElement("div");
  mainWindow.classList.add("outer-div");

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("button-div");

  const loginok = async () => {
    buttonsDiv.appendChild(Loader);
    buttonsDiv.removeChild(Login);
    await wallet.requestSignIn(CONTRACT_NAME).then(() => {
      buttonsDiv.removeChild(Loader);
      console.log("ok");
    });
  };
  const logoutok = async () => {
    await wallet.signOut();
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  const Login = LoginButton(loginok);
  const Logout = LogoutButton(logoutok);
  rootElement.appendChild(mainWindow);
  rootElement.appendChild(MenuOpen);

  if (loggedIn == true) {
    var user = JSON.parse(localStorage.getItem("undefined_wallet_auth_key"));
    console.log(user.accountId);
    mainWindow.appendChild(title(user.accountId));
    buttonsDiv.appendChild(Logout);
    mainWindow.appendChild(ParagraphAfterLogin());
    mainWindow.appendChild(Discount);
    mainWindow.appendChild(buttonsDiv);
  } else {
    buttonsDiv.appendChild(Login);
    mainWindow.appendChild(title("New User"));
    mainWindow.appendChild(MidtableBefore);
    mainWindow.appendChild(buttonsDiv);
  }
};

export default ToggleWindow;
