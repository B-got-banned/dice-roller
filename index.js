const diceSubmit = document.getElementById("diceSubmit");
diceSubmit.onclick = function(){
const noOfDice = document.getElementById("noOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

let values = [];
let images = [];
  for(let i = 0; i < noOfDice; i++){
    let value = Math.floor(Math.random() * 6) + 1;
    let image = `<img src="images/dice-images-six-${value}.png" alt="dice image ${value}">`;
    values.push(value);
    images.push(image);
  }
  let total = values.reduce((a, b) => a + b, 0);
  let audio = new Audio("sounds/dice-95077.mp3");

   diceResult.textContent = `Rolled: ${values.join(", ")} (Total: ${total})`;
   audio.play();
   diceImages.innerHTML = images.join("");
  
}