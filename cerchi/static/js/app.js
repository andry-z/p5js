function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

let counter = 0;

function draw() {
  circle(random(0, 1000), random(0, 1000), random(30, 90));
  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  counter++;
  if (counter > 1000) {
    background(255, 255, 255);
  }
}
