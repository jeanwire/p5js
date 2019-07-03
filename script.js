/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

function setup() {
  createCanvas(400, 400);
}

const circles = [];

function draw() {
  background(220);
  
  if (mouseIsPressed) {
    circles.push({x:mouseX, y:mouseY, r: Math.random() * 255, g: Math.random() * 255, b:Math.random() * 255});
  }
  
  renderCircles();
    
  
}


function renderCircles(){
  for (const item of circles) {
    ellipse(item.x, item.y, 80, 80);
    fill(item.r, item.g, item.b);
  }
  
function moveCircles
}