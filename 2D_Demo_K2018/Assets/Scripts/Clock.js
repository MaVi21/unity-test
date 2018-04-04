#pragma strict
private var timeStr : String;
var timeToComplete : int = 30;
private var timeRemaining : float;
private var startTime : float;

var gameScript : Game;

var clockText : UnityEngine.UI.Text;

function Start () {

	Initialize();
}

function Initialize(){

	startTime = timeToComplete;
	startTime = startTime + Time.timeSinceLevelLoad;	

}

function Update(){

	//TODO
	timeRemaining = startTime - Time.timeSinceLevelLoad;

	if(timeRemaining <= 0){

		timeRemaining = 0;
		gameScript.HandleGameOver();
		Destroy(this);
	}

	FormatTime();
	clockText.text = timeStr;

}

function FormatTime(){

	//TODO
	var minutes : int;
	var seconds : int;
	minutes = timeRemaining / 60;
	seconds = timeRemaining % 60;

	//D2 forces use of two numbers for minutes and seconds
	timeStr = minutes + ":" + seconds.ToString("D2");
}








