let x;
let y;

function setup(){
    createCanvas(1000, 1000)
    strokeWeight(2)
    frameRate(60)
    x = random(50, 900)
    y = random(50, 900)
}

let d = 50;
let xf = d;
let yf = d;

let xspeed = 5
let yspeed = 2

function drawFlower(x, y, d){
    fill(255, 190, 0)
    circle(x+d/2, y-d/2, d)
    circle(x-d/2, y+d/2, d)
    circle(x-d/2, y-d/2, d)
    circle(x+d/2, y+d/2, d)
    fill(255, 120, 0)
    circle(x, y, d)
}

function draw(){
    background(0, 255, 51)
    drawFlower(x, y, d)
    x += xspeed;
    y += yspeed;
    if (x > 1000 - d || x < d) {
        xspeed = -xspeed;
    }
    if (y > 1000 - d || y < d) {
        yspeed = -yspeed;
    }
}

/* 

let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;

x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }




*/