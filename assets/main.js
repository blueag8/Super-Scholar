
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
    publisher:"Dc",
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

publisher=document.getElementById("publisher");
