/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

const circles = [];
const canvasWidth = 400;
const canvasHeight = 400;
const circleWidth = 80;
const circleHeight = 80; 

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);
  
  const newCircle = {
    x:mouseX, 
    y:mouseY, 
    r: Math.random() * 255, 
    g: Math.random() * 255, 
    b: Math.random() * 255,
    v_x: Math.random() - 0.5,
    v_y: Math.random() - 0.5
  }
  
  if (mouseIsPressed) {
    circles.push(newCircle);
  }
  
  renderCircles();
  updatePosition();
}


function renderCircles(){
  for (const item of circles) {
    ellipse(item.x, item.y, circleWidth, circleHeight);
    fill(item.r, item.g, item.b);
  }
  
}

function updatePosition() {
  for (const item of circles) {
    item.x = item.x + item.v_x;
    if (item.x >= canvasWidth - circleWidth || item.x <= canvasWidth+circleWidth) {
      item.v_x = -item.v_x;
    }
    item.y = item.y + item.v_y;
  }
}