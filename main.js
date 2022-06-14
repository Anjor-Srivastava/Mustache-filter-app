var noseX = 0;
var noseY = 0;

function preload() {
    img = loadImage("mustache.png");
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPose);
}

function gotPose(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + ", NoseY = " + noseY);
    }
}

function modelLoaded() {
    console.log("AI Loaded");
}

function draw() {
    image(video, 0, 0, 400, 400);
    //image(img, noseX, noseY, 150, 41)
}

function snap() {
    save("musacheFilter.png")
}