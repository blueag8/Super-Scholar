var game=document.getElementById("playBtn");

//add event listner
game.addEventListener("click", startGame, hideButton );


function hideButton(){
var x= document.getElementById("play");
    if (x.style.display === "none")
    {
        x.style.display="block";
    }else{
        x.style.display = "none";

    }
}

var score=0;
var timer=0;

//trigger all functions
function startGame(){
           startTimer();
}

console.log();

function
 startTimer(){
  getData();
   getScore();

  var scoreBoard=document.getElementById("scoreBoard");
  scoreBoard.style.backgroundColor="white";
  var secs= 15;
  var clock= document.getElementById("timer");


  var timerId=setInterval(countdown, 1000);

     function countdown(){


         if (secs == 0) {
            clearInterval(timerId);
            clock.innerHTML= "0";
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
},

{
    name:"Flash",
    publisher:"DC",
    img:"img/flash.jpg"
},

{
    name:"Deadpool",
    publisher:"Marvel",
    img:"img/Deadpool.jpg"
},
{
    name:"Green Lantern",
    publisher:"DC",
    img:"img/Green.jpg"
},
{
    name:"Wonder Woman",
    publisher:"DC",
    img:"img/Wonder"
},
{
    name:"Aquaman",
    publisher:"DC",
    img:"img/aqua.jpg"
},

{
    name:"Carol Danvers aka ms. Marvel",
    publisher:"Marvel",
    img:"img/msmarvel.jpg"
},
{
    name:"Clint Barton aka Hawkeye",
    publisher:"Marvel",
    img:"img/Hawkeye.jpg"
},
];

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

gamecard=document.getElementById("publisher").innerHTML;


userInput=event.target.value;

if(userInput===gamecard){

score +=10;
scoreBoard.innerHTML="Scholar-Points = " + score;
console.log ("correct");

document.getElementById("hero").style.backgroundColor="green";
}

else {
 document.getElementById("hero").style.backgroundColor="red";

 scoreBoard.innerHTML="Scholar-Points = " + score;
    console.log("wrong");

}

console.log(typeof userInput, "answer="+ userInput,typeof publisher,"publisher="+ publisher, typeof gamecard, "gamecard="+gamecard, typeof score, score);
}

function getResult(){
score=score;
       if(score <= 10){
         result="You need more practice!";
       }
        else if(score >=10 && score <=50){
         result= " You are a Novice";
         }
        else if(score >=50 && score <=100){
           result= "Wow you know your stuff!";
         }
        else if(score >=100){
            result="You are a SUPER scholar!";
         }
        else{
            console.log(error);
        }
        console.log(result, typeof result);
     }
//create LeaderBoard

function leaderBoard() {
  getResult();

  name= document.getElementById("playerName").value;

  score=score;


  superScholars=localStorage.setItem("superScholar",JSON.stringify({ "name":name ,"score": score}));

  highscores=JSON.parse(localStorage.getItem("superScholar"));

     for (var i=0; i < highscores.length; i++); {
    document.getElementById('result').innerHTML= result;
    document.getElementById("super").innerHTML =  "Congratulations"+ " " +highscores.name + " " + "You got" + " " + highscores.score+" "+"Scholar Points!";
  }
  console.log(typeof score,  score, typeof name);

}