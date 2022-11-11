export const LoginButton = () => {
  const button = document.createElement("button");
  button.textContent = "Login";
  button.classList.add("login-button");
  button.onclick = function () {
    console.log("Login Ok");
  };
  return button;
};

export const LogoutButton = () => {
  const button = document.createElement("button");
  button.textContent = "Logout";
  button.classList.add("logout-button");
  button.onclick = function () {
    console.log("Logout Ok");
  };
  return button;
};
