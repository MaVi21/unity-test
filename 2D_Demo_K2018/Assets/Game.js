#pragma strict
import UnityEngine.SceneManagement;

var amountOfOpen : int = 0;
//pairs found by player
var amountOfFound : int = 0;
var requiredToWin : int = 0;
//references to the script components of the cards opened by player
var firstCard : Card;
var secondCard : Card;

//message objects (prefabs)
var noPairMessage : GameObject;
var pairFoundMessage : GameObject;
//replay button
var replayButton : GameObject;

function Awake () {

	Time.timeScale = 1;
}

function Start () {

}

function HandleGameOver(){

	print("game over");
	Time.timeScale = 0;
	replayButton.SetActive(true);
}

function OnReplayButtonClicked(){

	print("replay game");
	//reload the current scene
	SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}


function HandleCardSelect (c : Card) {

	print("handle card select");
	if(c.locked == false)
		DoGameLogic(c);

}

function DoGameLogic(c : Card){

	print("do game logic");
	//c refers to the script component of the selected card
	c.ShowForeground();
	c.locked = true;

	if(amountOfOpen == 0){

		amountOfOpen = 1;
		firstCard = c;
	}
	else{

		amountOfOpen = 0;
		secondCard = c;

		if(firstCard.GetFg() == secondCard.GetFg()){

			//tp = camera's position
			var tp2 : Vector3 = transform.position;
			tp2.z = 0;
			var pfm : GameObject = Instantiate(pairFoundMessage, tp2, transform.rotation);

			yield WaitForSeconds(2);

			Destroy(pfm);

			print("pair");
			firstCard.Remove();
			secondCard.Remove();

			amountOfFound++;

			if(amountOfFound == requiredToWin){

				HandleGameOver();
			}

		} 
		else{
			print("not a pair");

			//tp = camera's position
			var tp : Vector3 = transform.position;
			tp.z = 0;
			var npm : GameObject = Instantiate(noPairMessage, tp, transform.rotation);

			yield WaitForSeconds(2);

			Destroy(npm);
			firstCard.ShowBackground();
			secondCard.ShowBackground();
			firstCard.locked = false;
			secondCard.locked = false;

		}
	}

}