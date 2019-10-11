var game=

document.getElementById("playBtn");

//add event listners
game.addEventListener("click", startTimer);
game.addEventListener("click", getScore);
game.addEventListener("click", getData);

function startTimer(){
  var secs= 30;
  var clock= document.getElementById("timer");

  var timerId=setInterval(countdown, 1000);

     function countdown(){


         if (secs == 0) {
            clearTimeout(timerId);
            $('#gameOver').modal('show');

         }

        else{
         clock.innerHTML= "0:" + secs ;
         secs--;
     }
        if (secs < 10){
            timer.style.color="red";

         }
game.Clock;
     }
}
const Hero={
    //test//
    // name:"Henry(test)",
    // publisher:"Ford(test)"
    name:"Hulk",
    publisher: "Marvel"
    };

const name= Hero.name;
const publisher=Hero.publisher;

const gameCard= name + publisher;

game.gameCard;

function getData(){

document.getElementById("cardData").innerHTML=gameCard;
}

//marvel and dc assign button functions
publisher.addEventListener("onclick", getScore);
publisher=document.getElementById("publisher").value;

function getScore(){

var publisher=event.target.value;
var gameCard=document.getElementById("cardData").innerHTML;
var scoreBoard=document.getElementById("scoreBoard");
let score= 0;


if (gameCard[4]===publisher[0]){
   score ++ ;

}
scoreBoard.innerHTML=score + "score";



console.log(score)
}
