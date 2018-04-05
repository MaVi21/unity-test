#pragma strict

var audioClips : AudioClip[];

function Start () {

	Invoke("PlayAudio", Random.Range(4, 15) );

}

function PlayAudio () {

	GetComponent.<AudioSource>().clip = audioClips[Random.Range(0, audioClips.length)];
	GetComponent.<AudioSource>().Play();

	Invoke("PlayAudio", Random.Range(GetComponent.<AudioSource>().clip.length + 4, GetComponent.<AudioSource>().clip.length + 14) );
}