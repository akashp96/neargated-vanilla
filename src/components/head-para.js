export const title = () => {
  const titleAcc = document.createElement("h3");
  titleAcc.textContent = "Hi Akash";
  titleAcc.classList.add("account-header");

  return titleAcc;
};

export const ParagraphAfterLogin = () => {
  const paradiv = document.createElement("div");
  paradiv.classList.add("account-details");

  const list = document.createElement("ul");
  list.classList.add("list");
  const li1 = document.createElement("li");
  li1.classList.add("listitem");
  const li2 = document.createElement("li");
  li2.classList.add("listitem");

  li1.textContent = "Token Amount";
  li2.textContent = "Remaining Token Amount";

  list.appendChild(li1);
  list.appendChild(li2);

  paradiv.appendChild(list);

  return paradiv;
};

export const ParagraphBeforeLogin = () => {
  const paradiv = document.createElement("div");
  paradiv.classList.add("account-details");

  const info = document.createElement("p");
  info.classList.add("infoitem");
  info.textContent =
    "Please Login to your NEAR wallet to avail awesome discounts.";

  paradiv.appendChild(info);

  return paradiv;
};
