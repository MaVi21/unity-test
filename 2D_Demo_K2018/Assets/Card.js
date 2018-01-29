#pragma strict

var fgSprite : Sprite;
var bgSprite : Sprite;
var locked : boolean = false;

function Start () {
	
}

function ShowForeground () {

	GetComponent(SpriteRenderer).sprite = fgSprite;
}

function ShowBackground () {

	GetComponent(SpriteRenderer).sprite = bgSprite;
}