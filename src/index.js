import NearLoad from "./near.js";
import "./index.css";

window.onload = () => {
  const data = document.createElement("script");
  data.src =
    "https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js";
  data.async = true;
  data.onload = () => {
    console.log("near loaded");
    NearLoad();
  };
  document.body.append(data);
};
