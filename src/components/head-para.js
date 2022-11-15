export const title = (account) => {
  const titleAcc = document.createElement("h3");
  titleAcc.textContent = `Hi ${account}`;
  titleAcc.classList.add("account-header");

  return titleAcc;
};

export const ParagraphAfterLogin = () => {
  const wholediv = document.createElement("div");
  wholediv.classList.add("account-main");

  const paradiv = document.createElement("div");
  paradiv.classList.add("account-details-loggedin");

  const botimage = document.createElement("img");
  botimage.classList.add("bot-after");
  botimage.src = "/src/assets/bot.png";

  // const list = document.createElement("ul");
  // list.classList.add("list");
  // const li1 = document.createElement("li");
  // li1.classList.add("listitem");
  // const li2 = document.createElement("li");
  // li2.classList.add("listitem");

  // li1.textContent = `Balance - ${balance}`;
  // li2.textContent = `Locked Balance - ${lockedBalance}`;

  const info = document.createElement("p");
  info.classList.add("infoitem");
  info.textContent = "Yay! You successfully connected your account.";

  // list.appendChild(li1);
  // list.appendChild(li2);

  paradiv.appendChild(info);
  wholediv.appendChild(botimage);
  wholediv.appendChild(paradiv);

  return wholediv;
};

export const ParagraphBeforeLogin = () => {
  const wholediv = document.createElement("div");
  wholediv.classList.add("account-main");

  const botimage = document.createElement("img");
  botimage.classList.add("bot");
  botimage.src = "/src/assets/bot.png";

  const paradiv = document.createElement("div");
  paradiv.classList.add("account-details");

  const info = document.createElement("p");
  info.classList.add("infoitem");
  info.textContent =
    "Please Login to your NEAR wallet to avail awesome discounts.";

  paradiv.appendChild(info);
  wholediv.appendChild(botimage);
  wholediv.appendChild(paradiv);

  return wholediv;
};
