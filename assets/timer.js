var game=

document.getElementById("playBtn");
publisher=document.getElementById("publisher");

game.publisher;
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
            clearInterval(timerId);
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
    publisher: "Marvel",
    img:"img/Hulk_(comics_character).png"
},
{
    name:"Superman",
    publisher:"DC",
    img:"img/Superman.jpg"
},
{
    name:"Iron Man",
    publisher:"Marvel",
    img:"img/Iron_Man.png"
},
{
    name:"Thor",
    publisher:"Marvel",
    img:"img/Thor.png"
},
{
    name:"Batman",
    publisher:"DC",
    img:"img/Batman.jpeg"
},
{
    name:"Catwoman",
    publisher:"DC",
    img:"img/catwoman.jpg"
},
{
    name:"Captain America",
    publisher:"Marvel",
    img:"img/Captain_America.jpg"

},
{
    name:"The Joker",
    publisher:"DC",
    img:"img/Joker.jpg"
},
{
    name:"Wolverine",
    publisher:"Marvel",
    img:"img/wolverine.jpg"
},
{
    name:"Storm",
    publisher:"Marvel",
    img:"img/Storm.jpg"
}];

const keys = Object.keys(hero);
const randomIndex = keys[Math.floor(Math.random() * keys.length)];
const item = hero[randomIndex];

card=document.getElementById("cardData").innerHTML=item.name;

publisher=document.getElementById("publisher").innerHTML=item.publisher;

img=document.getElementById("img").src=item.img;


gamecard= card + publisher + img;
game.gameCard;

}

function getScore(){
var score=0;
var publisher=event.target.value;
var gamecard=document.getElementById("publisher").innerHTML;
var scoreBoard=document.getElementById("scoreBoard");


if(publisher==gamecard){

score ++ ;
scoreBoard.innerHTML= score + score;

document.getElementById("card").style.backgroundColor="green";
    console.log("correct");
}
else{
document.getElementById("card").style.backgroundColor="red";
    console.log("wrong");
}
console.log(gamecard, publisher, score);
}