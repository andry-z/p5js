function setup() {
  createCanvas(1000, 1000);
  background(0, 255, 51);
  strokeWeight(2);
  frameRate(60);
}

let d = 50;
let xf = d;
let yf = d;

function drawFlower(x, y, d) {
  fill(255, 190, 0);
  circle(x + d / 2, y - d / 2, d);
  circle(x - d / 2, y + d / 2, d);
  circle(x - d / 2, y - d / 2, d);
  circle(x + d / 2, y + d / 2, d);
  fill(255, 120, 0);
  circle(x, y, d);
}

function draw() {
  drawFlower(xf, yf, d);
  xf = xf + d * 2;
  if (xf >= 1000) {
    xf = d;
    yf = yf + d * 2;
  }
}
