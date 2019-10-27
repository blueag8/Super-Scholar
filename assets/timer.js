var game=document.getElementById("playBtn");

//add event listner
game.addEventListener("click", startGame);

score=0;
timer=0;
score=0;
//trigger all functions
function startGame(){
   startTimer();


}
console.log();

function startTimer(){
 getData();
 getScore();
  var secs= 15;
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
         console.log(score, gamecard);
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

console.log(typeof gamecard);

}


function getScore(){
scoreBoard=document.getElementById("scoreBoard");
scoreBoard.innerHTML="Scholar-Points = " + score;
scoreBoard.style.backgroundColor="white";
gamecard=document.getElementById("publisher").innerHTML;
score=score;

userInput=event.target.value;

if(userInput===gamecard){

score +=10;

document.getElementById("game").style.backgroundColor="green";
    console.log ("correct");
}

else {

score+=0;
document.getElementById("game").style.backgroundColor="red";
    console.log("wrong");
    getData();

}

console.log(typeof userInput, "answer="+ userInput,typeof publisher,"publisher="+ publisher, typeof gamecard, "gamecard="+gamecard, typeof score, score);
}


//create LeaderBoard

function leaderBoard() {
  name= document.getElementById("playerName").value;

  score=document.getElementById("scoreBoard").innerHTML;

  superScholars=localStorage.setItem("superScholar",JSON.stringify({ "name":name ,"score": score}));

  highscores=JSON.parse(localStorage.getItem("superScholar"));

     for (var i=0; i < highscores.length; i++); {

    document.getElementById("super").innerHTML = "<tr><td>" + highscores.name + "</td><td>" + highscores.score + "</td></tr>";
  }
  console.log(typeof score,  score, typeof name,);

}