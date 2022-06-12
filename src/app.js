import "bootstrap";
import "./style.css";

window.onload = function() {
  let pro = ["the", "our", "my", ""];
  let adj = ["great", "big", "cool", "cheesy", "funny", "spectacular"];
  let noun = ["jogger", "racoon", "giraffe", "witch", "tree", "cheese"];
  let ext = [".com", ".net", ".io", ".es", ".tv", ".de"];

  let getDomName = arr => {
    let a = Math.floor(Math.random() * arr.length);
    return arr[a];
  };

  document.getElementById("theId").innerHTML =
    getDomName(pro) + getDomName(adj) + getDomName(noun) + getDomName(ext);
};
