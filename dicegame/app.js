var score, roundScore, activePlayer, dice, gamePlaying, previousDice;

//console.log(dice);
//document.querySelector("#current-" + activePlayer).textContent = dice;

//GETTER
//if we want to put some HTML content then we need to put the HTML method.
//document.querySelector("#current-0").innerHTML = "<em>" + dice + "</em>";

//if WE do this  without innerHTML by using textContent then it will not display correctly..
//document.querySelector("#score-0").textContent = "<em>" + dice + "</em>";

//SETTER
//This SETS the value of the variable x equals to value of the element i.e.44
//x=document.querySelector('#score-0').textContent;

//If at the starting we want to set the dice not to display then we need to

init();
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1. random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the Results
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dicegame/dice-" + dice + ".png";

    //3.update the round number if the score was not 1
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //next player
      nextPlayer();
    }
  }
});

//pressing the hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    //Check if the player wins the game
    if (score[activePlayer] >= 20) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //change the player
      nextPlayer();
    }
  }
});

//pressing the new game button!
document.querySelector(".btn-new").addEventListener("click", init);
//new player function
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  //previousDice=0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

function init() {
  gamePlaying = true;
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
