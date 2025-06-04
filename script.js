"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let chance = 20;
let highScore=0;

document.querySelector(".chance").textContent = chance;
document.querySelector(".highscore").textContent = highScore;

function displayMessage(message){
  document.querySelector('.message').textContent=message;
}

document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (guess == 0 || guess < 1 || guess > 20) {
     displayMessage ("Plz Enter a Valid number !😊");
    } else if (guess == secretNumber) {
      displayMessage("Correct Number🎉");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor="green";

      if (chance > highScore) {
        highScore = chance;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if(guess !=secretNumber){
      if(chance>1){
        displayMessage(guess>secretNumber ? "Too High⬆️":"Too Low ⬇️");
        chance--;
        document.querySelector(".chance").textContent=chance;
      } else{
        displayMessage("Oops! you Lost the Game!😒")
        chance=0;
        document.querySelector(".chance").textContent=chance;
      }
    }
    
  });

document.querySelector(".restart").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".number").textContent = secretNumber;

  document.querySelector("body").style.backgroundColor = "white";

  document.querySelector(".guess").value = "";

  displayMessage("Start guessing 🤔");

  chance = 20;

  document.querySelector(".chance").textContent = chance;
});
