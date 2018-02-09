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


		//to find the nearest
		var nearestDistance : float = float.MaxValue;
 		var distance : float;
 		var nearestCard : Collider2D;

		//walk through the collider objects in the array 
		for(var i = 0; i < hitColliders.Length; i++){

			//if an object inside radius is tagged as Card
			if(hitColliders[i].gameObject.tag == "Card"){

				//distance = (gameObject.transform.position - hitColliders[i].transform.position).sqrMagnitude;
				distance = Vector3.Distance(transform.position, hitColliders[i].transform.position);
				print(distance);

				if(distance < nearestDistance){

					nearestCard = hitColliders[i];
					nearestDistance = distance;

				}
			}
		}


		//create a reference to the object's script component called Card
		var c : Card = nearestCard.gameObject.GetComponent(Card);
		//send the script reference to game logic script as an argument
		gameLogicScript.HandleCardSelect(c);

	}
}