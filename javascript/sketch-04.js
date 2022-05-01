var width = 1000;
var height = 1000;

function setup(){
    createCanvas(1000, 1000);
    background(300, 180, 10);
    angleMode(DEGREES);

    var i = 0;
    while (i < 1000) {
    translate(0, -10);
    fill(149, 149, 237);
    stroke(100, 100, 232);
    strokeWeight(2);
    ellipse(500, 130 * i, 750, 100*i);
    i = i + 0.2;
    }
}

function draw() {
    noFill();
    stroke(300, 180, 10);
    strokeWeight(50);
    line (120, 0, 870, 1000);
}

function mousePressed(){
    saveCanvas("sketch-04", "png")
}
