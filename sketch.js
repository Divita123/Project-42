var ISS,cap;
var hasDocked=false;
var meet;
var astronaut;

function preload(){
ISS_img = loadImage("ISS.png");
C1_i = loadAnimation("spacecraft1.png");
C2_i = loadAnimation("spacecraft2.png");
C3_i = loadAnimation("spacecraft3.png");
C4_i = loadAnimation("spacecraft4.png");
bg = loadImage("spacebg.jpg");
button_img = loadImage("button.png");
note_img = loadImage("note.png");
earth_img = loadImage("earth.png");
astronaut_img = loadImage("Astronaut.png");
meet_img = loadImage("meet.png");
}
function setup(){
  createCanvas(1000,688);
ISS = createSprite(400,300,20,20);
ISS.addImage(ISS_img);
ISS.scale=0.50;

start = createSprite(960,650,500,500);
start.addImage(button_img);
start.scale=0.1;

earth = createSprite(500,380,500,500);
earth.addImage(earth_img);
earth.scale=1;

Note = createSprite(500,50,500,500);
Note.addImage(note_img);
Note.scale=0.20;

meet = createSprite(500,400,100,100);
meet.visible=false;
meet.addImage(meet_img);

astronaut = createSprite(500,350,2,20);
astronaut.addImage(astronaut_img);
astronaut.visible=false;
astronaut.scale=2.25;

cap = createSprite(800,200,10,10);
cap.addAnimation("cap1",C1_i);
cap.addAnimation("cap2",C2_i);
cap.addAnimation("cap3",C3_i);
cap.addAnimation("cap4",C4_i);
cap.visible=false;
cap.scale=0.15;
cap.y = Math.round(random(300,500));
}
function draw(){
background(bg);

if(!hasDocked){
 
    if(keyCode===37){//left
    cap.velocityX=-3.5;
    cap.changeAnimation("cap2",C2_i);
  }
  if(keyCode===38){//up
    cap.velocityY=-1.5;
    cap.changeAnimation("cap4",C4_i);
  }
  if(keyCode===39){//right
    cap.changeAnimation("cap1",C1_i);
  }
  if(keyCode===40){//down
    cap.changeAnimation("cap3",C3_i);
    cap.velocityY=1.5;
  }
 
  if(cap.x<=300 && cap.y<310 && cap.y>280){
   hasDocked=true;
   cap.velocityX=0;
   cap.velocityY=0;
   cap.x=280;
   cap.y=300;
   cap.changeAnimation("cap1",C1_i);

  }
  console.log(hasDocked);
 
}

if(hasDocked===true){
  meet.visible=true;
  fill("white");
  textSize(50);
  strokeWeight(2);
  stroke("yellow");
  text("Docking Successful",275,250);
  textSize(20);
  strokeWeight(10);
  fill("black");
  textFont("Kunstler Script")
  textFont("Bold");
  text(" Scott Joseph Kelly wants to meet you ",275+50,300);
 
}
if(mousePressedOver(meet)){
  astronaut.visible=true;
  cap.destroy();
  ISS.destroy();
  earth.destroy();
  start.destroy();

}
if(mousePressedOver(start)) {
  ISS.scale=1;
  ISS.x=200;
  start.visible=false;
  cap.visible=true;
  Note.destroy();
  earth.x=1000;
  earth.y=350;

}
fill("white");
textSize(25);
strokeWeight(2);
stroke("yellow");
text("X : "+cap.x,400,139);
text("Y : "+cap.y,400,139+25);

drawSprites();
}