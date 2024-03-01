var textIn = document.getElementById("intext");
const inclass = document.getElementsByClassName("inputname");
const display = document.getElementsByClassName("party");

let log = () => {
  // e.preventDefault();
  console.log(String(textIn.value));
  let str = String(textIn.value);
  let elem;
  for (let i = 0; i < str.length; i++) {
    elem = document.createElement("h1");
    elem.innerText = str[i];
    elem.classList.add("c");
    display[0].appendChild(elem);
    console.log(elem);
  }

  inclass[0].style.opacity = "0";
  inclass[0].style.width = "0";
  anima();
};
function anima() {
  let elem = document.getElementsByClassName("c");
  for (let j = 0; j < elem.length; j++) {
    // elem[j].style.animationDelay = j * 0.5 + "s";
    elem[j].style.animation = `ani 10s ${
      j * 0.5
    }s infinite ease-in-out`;
  }
}
