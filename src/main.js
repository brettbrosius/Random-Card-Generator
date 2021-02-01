import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomFace();
};

let generateRandomFace = () => {
  let faces = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexFaces = Math.floor(Math.random() * faces.length);
  return faces[indexFaces];
};
let generateRandomSuit = () => {
  let suits = ["diamond", "heart", "club", "spade"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
