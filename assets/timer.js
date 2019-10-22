
var game=document.getElementById("playBtn");

score=0;
timer=0;
publisher=null;

//add event listners
game.addEventListener("click", startGame);


function startGame(){
   startTimer();
   getScore();
   getData();
   }

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
         clock.style.backgroundColor="white";
     }
        if (secs < 10){
            clock.style.color="red";

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

img=document.getElementById("hero").src=item.img;


gamecard= card + publisher + img;
game.gamecard;

}

function getScore(){
publisher=document.getElementById("publishers").value;
publishers=event.target.value;
gamecard=document.getElementById("publisher").innerHTML;
var scoreBoard=document.getElementById("scoreBoard");


if(publisher===gamecard){

score +=10 ;
scoreBoard.innerHTML="Scholar-Points = " + score;
scoreBoard.style.backgroundColor="white";
score=score;

document.getElementById("game").style.backgroundColor="green";
    console.log("correct");
}
else{
document.getElementById("game").style.backgroundColor="red";
    console.log("wrong");
    score=score;
}
console.log(typeof gamecard, gamecard, typeof publisher, publisher, typeof score, score);
}


function leaderBoard() {
  var player= document.getElementById("playerName").value;
  document.getElementById("player").innerHTML = player;

  var score=document.getElementById("scoreBoard").innerHTML;
  document.getElementById("Score").innerHTML= score;

  console.log(typeof score, scoreBoard);

}
