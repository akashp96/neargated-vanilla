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

export const Hamburger = () => {
  const button = document.createElement("button");
  button.classList.add("menu-open");
  button.onclick = function () {
    console.log("Menu Open");
  };

  const line1 = document.createElement("div");
  line1.classList.add("menu-line1");
  const line2 = document.createElement("div");
  line2.classList.add("menu-line2");
  const line3 = document.createElement("div");
  line3.classList.add("menu-line3");

  button.appendChild(line1);
  button.appendChild(line2);
  button.appendChild(line3);
  return button;
};
