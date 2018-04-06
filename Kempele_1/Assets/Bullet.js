//class Bullet extends MonoBehaviour

#pragma strict

var rb : Rigidbody;
var power : int = 5;
//public int power = 5;
//var audioClip : AudioClip;

function Start () {

	//GetComponent.<AudioSource>().clip = audioClip;
	//print("Start");
	rb = GetComponent.<Rigidbody>();
	rb.AddForce(transform.forward * power, ForceMode.Impulse);
	//destroy the bullet after five seconds
	Destroy (gameObject, 5);
}

//this callback function will be called, when the bullet collides with another collider
function OnCollisionEnter(collision: Collision) {

	print("collision");

	//detect if the bullet collided with a target
	if(collision.gameObject.tag == "Target"){

		print("target hit");
		//find a gameobject by it's name
		var c = GameObject.Find("Main Camera");
		//look for function DisplayScore from all the script components of main camera
		c.SendMessage("DisplayScore");
	}

	Destroy(gameObject);

}

function Update () {

	//print("Update");
}