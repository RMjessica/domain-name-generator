import "bootstrap";
import "./style.css";

window.onload = function() {
  let pro = ["the", "our", "my", ""];
  let adj = ["great", "big", "cool", "cheesy", "funny", "rad"];
  let noun = ["jogger", "racoon", "giraffe", "witch", "tree", "cheese"];
  let ext = [".com", ".net", ".io", ".es", ".tv", ".de"];

  let getDomName = (...args) => {
    let domList = "";
    for (let i = 0; i < pro.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < ext.length; l++) {
            domList +=
              "<div class = 'alert alert-dark col mx-2 align-items-center'>" +
              pro[i] +
              adj[j] +
              noun[k] +
              ext[l] +
              "</div>";
          }
        }
      }
    }
    return domList;
  };

  document.getElementById("theId").innerHTML = getDomName(pro, adj, noun, ext);
};
