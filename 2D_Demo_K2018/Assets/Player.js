#pragma strict

var gameLogicScript : Game;

function Start () {

}

function FixedUpdate () {

	//observe keypresses of right ctrl
	var select : boolean = Input.GetKeyDown(KeyCode.RightControl);

	if(select){

		//collect colliders within 2 units radius to an array
		var hitColliders : Collider2D[] =
		Physics2D.OverlapCircleAll(transform.position, 2);

		//walk through the collider objects in the array 
		for(var i = 0; i < hitColliders.Length; i++){

			//if an object inside radius is tagged as Card
			if(hitColliders[i].gameObject.tag == "Card"){

				//create a reference to the object's script component called Card
				var c : Card = hitColliders[i].gameObject.GetComponent(Card);
				//send the script reference to game logic script as an argument
				gameLogicScript.HandleCardSelect(c);
			}
		}
	}
}