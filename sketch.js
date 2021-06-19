const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    GetTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);

    // write code to display time in correct format here


}

async function GetTime(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if (hour>=02 && hour<=04){
        bg = "sprites/sunrise1.png";
    }
    else if(hour>=04 && hour<=06) {
        bg = "sprites/sunrise2.jpg";
    }
    else if(hour>=06 && hour<=08) {
        bg = "sprites/sunrise3.jpg";
    }
    else if(hour>=08 && hour<=10) {
        bg = "sprites/sunrise4.jpg";
    }
    else if(hour>=10 && hour<=12) {
        bg = "sprites/sunrise5.jpg";
    }
    else if(hour>=12 && hour<=14) {
        bg = "sprites/sunrise6.jpg";
    }
    else if(hour>=14 && hour<=16) {
        bg = "sprites/sunrise7.jpg";
    }
    else if(hour>=16 && hour<=18) {
        bg = "sprites/sunrise8.jpg";
    }
    else if(hour>=18 && hour<=20) {
        bg = "sprites/sunrise9.jpg";
    }
    else if(hour>=20 && hour<=22) {
        bg = "sprites/sunrise10.jpg";
    }
    else if(hour>=22 && hour<=23) {
        bg = "sprites/sunrise11.jpg";
    }
    else if(hour>=0 && hour<=02) {
        bg = "sprites/sunrise12.jpg";
    }
     backgroundImg = loadImage(bg);
     console.log(backgroundImg);
}