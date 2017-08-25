// main.js

function generateIpsum() {
  var paragraphs = parseInt(document.getElementById("paragraphs").value);
  var paragraphSize = parseInt(document.getElementById("paragraph-size").value);
  setResult(generateHtml(paragraphs, paragraphSize));
}

function setResult(text) {
  document.getElementById("result-text").innerHTML = text;
}

var el = document.getElementById("generate-button");
el.addEventListener("click", generateIpsum, false);
