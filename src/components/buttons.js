export const LoginButton = (login) => {
  const button = document.createElement("button");
  button.textContent = "Sign in with NEAR";
  button.classList.add("login-button");
  button.onclick = login;
  return button;
};

export const LogoutButton = (logout) => {
  const button = document.createElement("button");
  button.textContent = "Logout";
  button.classList.add("logout-button");
  button.onclick = logout;
  return button;
};

export const LoginLoader = () => {
  const button = document.createElement("button");
  button.textContent = "Loading...";
  button.classList.add("button-loader");

  const inner = document.createElement("span");
  inner.classList.add("button-text");

  button.appendChild(inner);

  return button;
};

export const ApplyDiscount = () => {
  const button = document.createElement("button");
  button.textContent = "Apply Discount";
  button.classList.add("discount-button");
  button.onclick = function () {
    console.log("Discount Ok");
  };
  return button;
};

export const Hamburger = () => {
  const menubox = document.getElementsByClassName("outer-div");
  const button = document.createElement("div");
  button.classList.add("menu-open");

  const burgerspan = document.createElement("span");
  button.appendChild(burgerspan);

  button.onclick = function () {
    this.classList.toggle("close");
    Array.from(menubox).forEach((x) => {
      if (x.style.display == "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    });
  };

  return button;
};
