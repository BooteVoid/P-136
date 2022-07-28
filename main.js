status = "";

function preload() {
  video = createVideo('video.mp4');
  video.hide();

}

function setup () {
  canvas = createCanvas(480, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
}

function draw () {
  image(video, 0, 0, 480, 380);
}

function start ()
{
  objectDetector = ml5.objectDetector('cocoddd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img,gotResult);
  
}