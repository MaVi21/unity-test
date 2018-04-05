#pragma strict

var audioClips : AudioClip[];

function Start () {

	//Invoke("PlayAudio", Random.Range(3, 10) );
	PlayAudio();
}

function PlayAudio () {

	GetComponent.<AudioSource>().clip = audioClips[Random.Range(0, audioClips.length)];
	GetComponent.<AudioSource>().Play();

	Invoke("PlayAudio", GetComponent.<AudioSource>().clip.length);
}