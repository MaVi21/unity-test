#pragma strict

var fgSprite : Sprite;
var bgSprite : Sprite;
//is the card selectable by the player
var locked : boolean;

function Start () {

	GetComponent(SpriteRenderer).sprite = bgSprite;
}

function Remove(){

	Destroy(gameObject);
}

//this function will return a string value
function GetFg() : String{

	return GetComponent(SpriteRenderer).sprite.name;
}


function ShowForeground () {

	GetComponent(SpriteRenderer).sprite = fgSprite;
}

function ShowBackground () {

	GetComponent(SpriteRenderer).sprite = bgSprite;
}