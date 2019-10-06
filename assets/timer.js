var game=

//add event listners
document.getElementById("playBtn").addEventListener("click", startGame);

game.addEventListener("click", startTimer);
game.addEventListener("click", score);
game.addEventListener("click", getData)

function startGame(){
  var secs= 30;
  var clock= document.getElementById("timer");

  var timerId=setInterval(countdown, 1000);

     function countdown(){


         if (secs == 0) {
            clearTimeout(timerId);
            alert ("gameOver");

         }

        else{
         clock.innerHTML= "0:" + secs ;
         secs--;
     }
        if (secs < 10){
            timer.style.color="red";

         }

     }
}