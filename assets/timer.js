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
},
{
    name:"Ironman",
    publisher:"Marvel"
},
{
    name:"Thor",
    publisher:"Marvel"
},
{
    name:"Batman",
    publisher:"DC"
},
{
    name:"Catwoman",
    publisher:"DC"
},
{
    name:"Captain America",
    publisher:"Marvel"
},
{
    name:"The Joker",
    publisher:"DC"
},
{
    name:"Wolverine",
    publisher:"Marvel"
},
{
    name:"Storm",
    publisher:"Marvel"
}];

const keys = Object.keys(hero);
const randomIndex = keys[Math.floor(Math.random() * keys.length)];
const item = hero[randomIndex];

card=document.getElementById("cardData").innerHTML=item.name;

publisher=document.getElementById("publisher").innerHTML=item.publisher;

gamecard= card + publisher;



game.gameCard;

}


//marvel and dc assign button functions
publisher.addEventListener("onclick", getScore);
publisher=document.getElementById("publisher").value;

function getScore(){

var publisher=event.target.value;
var gameCard=document.getElementById("publisher").innerHTML;
var scoreBoard=document.getElementById("scoreBoard");


let score= 0;

if(publisher===gameCard){

score ++ ;
scoreBoard.innerHTML= score;

document.getElementById("card").style.backgroundColor="green";
    console.log("correct");
}
else{
document.getElementById("card").style.backgroundColor="red";
    console.log("wrong");
}
}
