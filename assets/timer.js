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

     }
}
function getData(){

const hero=[{
    //test//
    // name:"Henry(test)",
    // publisher:"Ford(test)"
    name:"Hulk",
    publisher: "Marvel"
},
{
    name:"Superman",
    publisher:"Dc"
}];

const keys = Object.keys(hero);
const randomIndex = keys[Math.floor(Math.random() * keys.length)];
const item = hero[randomIndex];


gameCard=document.getElementById("cardData").innerHTML=item.name + item.publisher;





//const random =Math.floor(Math.random() * hero.length);
//gameCard= hero[random];


game.gameCard;

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
game.score +=1;
scoreBoard.innerText=game.score;

console.log(score)
}


