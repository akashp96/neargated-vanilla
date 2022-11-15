import NearLoad from "./near.js";
import "./index.css";

window.onload = () => {
  const font = document.createElement("link");
  font.rel = "preconnect";
  font.href = "https://fonts.googleapis.com";
  const font2 = document.createElement("link");
  font2.rel = "preconnect";
  font2.href = "https://fonts.gstatic.com";
  font2.crossOrigin = "true";
  const font3 = document.createElement("link");
  font3.rel = "stylesheet";
  font3.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap";

  const data = document.createElement("script");
  data.src =
    "https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js";
  data.async = true;
  data.onload = () => {
    console.log("near loaded");
    NearLoad();
  };
  document.body.append(font);
  document.body.append(font2);
  document.body.append(font3);
  document.body.append(data);
};
