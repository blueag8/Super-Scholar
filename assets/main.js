
var Hero={
     name:"Henry(test)",
     publisher:"Ford(test)"
    };

gameCard= Hero.name + " " + Hero.publisher;
const keys=Object.keys(hero);
const randomCard=keys[Math.floor(Math.random()*keys.length)];
const item=hero(randomCard);



function getData(){

document.getElementById("cardData").innerHTML=gameCard;

}
getData();

<input type="button" name="Hero${HeroName}" value="${publisher}">
            ${publisher} :
            ${currentHero.currentPublisher[publisher]}

