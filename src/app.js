import "bootstrap";
import "./style.css";

window.onload = function() {
  //Set up arrays
  let pro = ["the", "our", "my", ""];
  let adj = ["great", "big", "cool", "cheesy", "funny", "spectacular"];
  let noun = ["jogger", "racoon", "giraffe", "witch", "tree", "cheese"];

  //create function to map and return a domain name
  let getDomName = arr => {
    let a = Math.floor(Math.random() * arr.length);
    return arr[a];
  };

  document.getElementById("theId").innerHTML =
    getDomName(pro) + getDomName(adj) + getDomName(noun) + ".com";

  //console.log(domGenFunction(pro, adj, noun).join("\n"));
  //domGen.innerHTML = domGenFunction(pro, adj, noun).join("<br/>");

  //document.getElementById("theId").innerHTML = dom;
};
