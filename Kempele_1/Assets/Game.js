#pragma strict

//public variables will appear in Unity editor as editable fields
var hSpeed : int = 10;
var vSpeed : int = 10;
var bullet : Rigidbody;
//var score : int = 0;
//var scoreText : UnityEngine.UI.Text;


function Start () {

	
}

function DisplayScore(){

	//score = score + 10;
	//scoreText.text = "Score: " + score;

}

function Update () {

	//read horizontal input, assign to a variable
	//var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * hSpeed;
	//refer to the transform component of the container object (Camera)
	//use Time class to achieve constant game play speed
	//transform.Translate (h, 0, 0);

	//aim with the "gun" by rotating the camera
	//var v : float = Input.GetAxis("Vertical") * Time.deltaTime * vSpeed;
	//transform.Rotate(v, 0, 0);

	if (Input.GetButtonDown("Fire1")) {

		var pos : Vector3 = transform.position;
		pos.y += 1;
		pos.x += 0.45;
		print("fire");
		//create an instance of a prefab (bullet)
		var b : Rigidbody = Instantiate(bullet, pos, transform.rotation);
	}
}
