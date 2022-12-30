import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap";
document.getElementById("btnClick").addEventListener("click", () => {
  alert("hello webpack");

  setItem(
    "token",
    "ghjjfhshadgefdhgdfhdhdbnffgadfhgfglkflikbikdikbifdmbimbisofgfmfllglglb"
  );
});
