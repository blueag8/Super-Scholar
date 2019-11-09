
# Super-Scholar
*A Game to test your super knowledge*
Do you know your Marvel vs DC superheroes and villains?

## The Project

This is an Interactive front-end project.
Technologies used for this project include

-HTML
-CSS
-Javascript

The goal is to create a front-end web application that has interactive functionality and "Use[s] JavaScript to have the site produce relevant responses dependent on users' actions".

I have decided to base my project on the Project Idea Example #2-
Build a Memory Game.

**External Users Goals**
To have fun playing a game.

**Site Owner's Goal**
To have fun playing the game and build a game other's enjoy playing.

**Users Expectations**
To play a visually appealing game. Easy to navigate and provides clear instructions on how to play. As a player, I want to know how I am progressing so I would like feedback such as a scoreboard.

**The Plan**

*Main Page*
HTML/CSS
Display Card
	Image
	Name
Help Modal with pop up
Play button
Left Button (Marvel)
Right Button (DC)
Score (10 point increments)
Game Over Modal
	Scoreboard
	Play again button

Functionality
	Help Modal Pop Up on Click
	Play Button-Onclick load data (20 max )
    Randomise Character selections
	Click left if Character is Marval
	Click Right if Character is DC
	If Selection is correct append 10+ score
	If correct card flash blue
	If wrong card flash red
	GameOver Modal triggered on last
	response for card 20
	Load Score board
	UserInput function for Name
    append score to name
    append name and score to                                                                            scoreboard/game over modal
    play again- clear score reload counter.

**Wireframes**
![wireframe for Super Scholar](https://res.cloudinary.com/blueag8/image/upload/v1570046738/Super%20Scholar/Desktop_Mockup_s93syp.png)

![wireframe for Super Scholar](https://res.cloudinary.com/blueag8/image/upload/v1570046738/Super%20Scholar/Smartphone_Mockup_hqr6jo)

**Features**
Help/Instructions
Score
Time Limit
Scoreboard
Game Over Modal /Leader Board

**Future Features to Implement**
Difficulty levels perhaps this can be achieved by including characters that are least known or grouped by popularity.

A larger database of characters.  This I had been hoping to acheive through accessing a third party api from "ComicVine"(see link in credits). I found it very difficult to successfully connect using a key. So due to time restrictions I attempted downloading a JSON format from another external database within "Kaggle".  This too also proved difficult, so I decided to to include a local database to access for characters.

**Version control**
Github
Gitpod

**Testing**

Testing was achieved through using DevTools and the console.log.  In addition I found it helpful to use the TryIt  Editor linked to the W3Schools learning environments.

*Bugs*
appeared fine on Honor Android phone but on iPhone the play button is almost transparent.

Player can still activate get data and get score before the timer starts.

**Deployment**
Github





# Credits
[https://comicvine.gamespot.com/api/documentation](https://comicvine.gamespot.com/api/documentation)

[https://www.kaggle.com/fivethirtyeight/fivethirtyeight-comic-characters-dataset/version/107](https://www.kaggle.com/fivethirtyeight/fivethirtyeight-comic-characters-dataset/version/107)

**Balsamiq**
Wireframes produced using balsamiq wireframes
[https://balsamiq.com/](https://balsamiq.com/)

## Acknowledgements

Mentor Antonio Rodriguez
Code Institute Tutorials
Slack- Code Institute

## References

https://github.com/taniarascia/memory/blob/master/js/script.original.JavaScript
(https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
[https://www.gitpod.io/blog/gitpodify/#opening-previews](https://www.gitpod.io/blog/gitpodify/#opening-previews)
[https://github.com/auxfuse/Milestone2](https://github.com/auxfuse/Milestone2)
https://stackoverflow.com/

https://www.w3schools.com
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMzNzIxNzI2NCwtMzQyMjI3MDQ5LC0xNz
Y1NjI5NDcyLDEwOTk1MjU4MTUsMTMyMjk1NTgwOCw4ODUxNTk3
NDIsNzMwOTk4MTE2XX0=
-->