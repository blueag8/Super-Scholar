var game=

//add event listners
document.getElementById("playBtn").addEventListener("click", startGame);

game.addEventListener("click", startTimer);
game.addEventListener("click", score);
game.addEventListener("click", getData)

function startGame(){
  document.getElementById("timer").innerHTML+= "Hello";

}


