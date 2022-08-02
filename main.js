status = "";
objects = [];

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

function gotResult (error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw () {
  image(video, 0, 0, 480, 380);
  if(objects[i].label == object_name)
  {
    objectDetector.detect(gotResult);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("object_status").innerHTML = object_name + "Found"
      
      fill('#FF0000');
      percent = floor(objects[i].confidence*100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }

}