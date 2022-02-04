nose_X = 0;
nose_Y = 0;
right_Wrist_X = 0;
left_Wrist_X = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canavs = createCanvas(550,550);
    canavs.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("POSENET IS INITIALIZED");
}

function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    nose_X = results[0].pose.nose.x;
    nose_Y = resulst[0].pose.nose.y;
    left_Wrist_X = results[0].pose.leftWrist.x;
    right_Wrist_X = results[0].pose.rightWrist.x;
    difference = floor(left_Wrist_X - right_Wrist_X);

}
}

function draw(){
    background('#E6E6F');
    document.getElementById("square_side").innerHTML = "width and height of a square will be = " +difference+ "px";
    fill('#567d46');
    stroke('#280137');
    square(nose_X,nose_Y,difference);
}