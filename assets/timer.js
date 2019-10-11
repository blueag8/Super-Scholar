var game=

document.getElementById("playBtn");

//add event listners
game.addEventListener("click", startTimer);
game.addEventListener("click", score);
game.addEventListener("click", getData)

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
var Hero={
    //test//
    // name:"Henry(test)",
    // publisher:"Ford(test)"
    name:"Hulk",
    publisher: "Marvel"
    };

gameCard= Hero.name + " " ;//+ Hero.publisher;//



function getData(){

document.getElementById("cardData").innerHTML=gameCard;
}

//marvel and dc assign button functions
publisher.addEventListener("onclick", result);
publisher=document.getElementById("publisher").value;

function result(){

        alert(event.target.value) ;  }