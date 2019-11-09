
# Super-Scholar
*A Game to test your super knowledge*
Do you know your Marvel vs DC superheroes and villains?

## The Project

Deployed Game [Here]
[https://blueag8.github.io/Super-Scholar/index.html](https://blueag8.github.io/Super-Scholar/index.html)

GitHub Repository [Here]
[https://github.com/blueag8/Super-Scholar](https://github.com/blueag8/Super-Scholar)

This is an Interactive front-end project.
Technologies used for this project include

-HTML
-CSS
-Javascript

The goal is to create a front-end web application that has interactive functionality and "Use[s] JavaScript to have the site produce relevant responses dependent on users' actions".

I have decided to base my project on the Project Idea Example #2-
Build a Memory Game.

I also gained inspiration from a fellow student's Milestone2 project "Keywords" see link in acknowledgements. 

**External Users Goals**
To have fun playing a game.

**Site Owner's Goal**
To have fun playing the game and build a game other's enjoy playing.

**Users Expectations**
To play a visually appealing game. Easy to navigate and provides clear instructions on how to play. As a player, I want to know how I am progressing so I would like feedback such as a scoreboard.

**The Plan**
I would like to connect to a third-party API to have access to an existing database. 

This is a checklist of what I would like to implement:

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
	-Play again button

Functionality
	Help Modal Pop Up on Click
	Play Button-Onclick load data (20 max )
    Randomise Character selections
	Click left if Character is Marval
	Click Right if Character is DC
	If Selection is correct append 10+ score
	If correct card flash green
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

A larger database of characters.  This I had been hoping to achieve through accessing a third party API from "ComicVine"(see link in credits). I found it very difficult to successfully connect using a key. So due to time restrictions, I attempted downloading a JSON format from another external database within "Kaggle".  This too also proved difficult, so I decided to include a local database to access for characters.

**Version control**
Github
Gitpod

**Testing**
Testing was achieved by using DevTools and the console log.  I also found it helpful to use the "TryIt  Editor" provided by W3School.
Playing the game myself and inviting family and friends to play the game and provide "User" feedback.

*Bugs & issues faced*

 - The game appeared fine on my Android phone. However, on iPhone6  the play button is almost transparent.

	*Solution*
	- slight tweaking of CSS.
	
- The player can still activate get data and get a score before the timer starts, this results in the player being able to get an infinite score.

   *Solution*
    -  This bug was due to having onClick functionality written as inline HTML. 

       example:
   
`<input type="image"        src="img/Marvel_logo.png"  value="Marvel" id="publishers"  for="Marvel"  class="col-sm-4" onclick="getData(), getScore()"
` >

   This meant that regardless of whether the player/user had "clicked" *play* (event to trigger the game and timer), they were able to click on the Input and get both a score and a new card. 

The solution for this was to remove the "onclick" from the HTML and add additional event listners to the var game which = document.getElementById("playBtn").

Within the "getScore" function I had to add a local function:

    document.getElementById("publishers"); onclick  =  function() { userInput  =  event.target.value; console.log(userInput);

- 

**Deployment**
Deployment was actioned via Github.

# Credits

Images accessed via connections- 
[https://comicvine.gamespot.com/api/documentation](https://comicvine.gamespot.com/api/documentation)

[https://www.kaggle.com/fivethirtyeight/fivethirtyeight-comic-characters-dataset/version/107](https://www.kaggle.com/fivethirtyeight/fivethirtyeight-comic-characters-dataset/version/107)

**Balsamiq**
**Wireframes** produced using Balsamiq wireframes
[https://balsamiq.com/](https://balsamiq.com/)

## Acknowledgements

**Mentor Antonio Rodriguez**
Code Institute Tutorials
Slack- Code Institute

## References
Tania Rascia-
https://github.com/taniarascia/memory/blob/master/js/script.original.JavaScript
(https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
Gitpodify-
[https://www.gitpod.io/blog/gitpodify/#opening-previews](https://www.gitpod.io/blog/gitpodify/#opening-previews)
Keywords-
[https://github.com/auxfuse/Milestone2](https://github.com/auxfuse/Milestone2)
Stackoverflow-[https://stackoverflow.com/questions/29022829/increment-score-using-javascript](https://stackoverflow.com/questions/29022829/increment-score-using-javascript)

[https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript](https://stackoverflow.com/questions/8710442/how-to-specify-multiple-conditions-in-an-if-statement-in-javascript)

W3Schools-
https://www.w3schools.com

Blog-
[https://josephephillips.com/blog/how-to-use-comic-vine-api-part1](https://josephephillips.com/blog/how-to-use-comic-vine-api-part1)


> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNjQ5NzA2MDMsNDg0NDY5NjAyLC0xMT
IyMzgyMjkxLDMzMTM0MTM3NiwtMzQyMjI3MDQ5LC0xNzY1NjI5
NDcyLDEwOTk1MjU4MTUsMTMyMjk1NTgwOCw4ODUxNTk3NDIsNz
MwOTk4MTE2XX0=
-->