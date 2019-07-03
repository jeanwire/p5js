/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

const circles = [];
const canvasWidth = 400;
const canvasHeight = 400;
const circleWidth = 20;
const circleHeight = 20; 


  const newCircle = {
    x:200, 
    y:200, 
    r: Math.random() * 255, 
    g: Math.random() * 255, 
    b: Math.random() * 255,
    v_x: Math.random() - 0.5,
    v_y: Math.random() - 0.5,
  }

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);
  
  // const newCircle = {
  //   x:mouseX, 
  //   y:mouseY, 
  //   r: Math.random() * 255, 
  //   g: Math.random() * 255, 
  //   b: Math.random() * 255,
  //   v_x: Math.random() - 0.5,
  //   v_y: Math.random() - 0.5,
  // }
  
  if (mouseIsPressed) {
    let circleSpedUp = false;
    for (const item of circles) {
      const distance = Math.sqrt(Math.pow(mouseX - item.x, 2) + Math.pow(mouseY - item.y, 2));
      if (distance < 10) {
        item.v_x *= 2;
        item.v_y *= 2;
        circleSpedUp = true;
      }
    }
    if (!circleSpedUp) {
      circles.push(newCircle);
    }
  }
  else {
    ellipse(mouseX, mouseY, circleWidth, circleHeight);
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
    if (item.x >= canvasWidth - circleWidth / 2 || item.x <= 0 + circleWidth / 2) {
      item.v_x = -item.v_x;
    }
    item.y = item.y + item.v_y;
    if (item.y >= canvasHeight - circleHeight / 2 || item.y <= 0 + circleHeight / 2) {
      item.v_y = -item.v_y;
    }
  }
}