function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(235, 240, 245);

  noStroke();
  fill(70, 68, 72);
  rect(180, 300, 240, 120, 30);
  fill(55, 53, 57);
  arc(300, 305, 110, 70, 0, PI);

  fill(244, 220, 205);
  rect(265, 255, 70, 60, 20);

  fill(250, 228, 215);
  ellipse(300, 185, 210, 240);

  fill(245, 222, 208);
  ellipse(198, 185, 28, 48);
  ellipse(402, 185, 28, 48);

  fill(25, 25, 30);
  arc(300, 125, 215, 150, PI, TWO_PI);
  ellipse(225, 150, 70, 90);
  ellipse(375, 150, 70, 90);

  fill(40, 45, 85);
  arc(300, 105, 230, 120, PI, TWO_PI);
  rect(210, 100, 180, 20, 10);
  arc(300, 120, 210, 35, 0, PI);

  fill(55, 55, 60);
  arc(255, 165, 45, 12, PI, TWO_PI);
  arc(345, 165, 45, 12, PI, TWO_PI);

  fill(255);
  ellipse(255, 183, 34, 18);
  ellipse(345, 183, 34, 18);
  fill(45, 35, 30);
  ellipse(255, 184, 12, 12);
  ellipse(345, 184, 12, 12);
  fill(255);
  ellipse(252, 181, 4, 4);
  ellipse(342, 181, 4, 4);

  noFill();
  stroke(185, 145, 135);
  strokeWeight(2);
  line(300, 188, 296, 220);
  arc(300, 223, 22, 14, 0.1, PI - 0.1);

  stroke(185, 120, 125);
  strokeWeight(2);
  arc(300, 250, 48, 20, 0.15, PI - 0.15);

  noStroke();
  fill(245, 205, 205, 80);
  ellipse(235, 228, 28, 16);
  ellipse(365, 228, 28, 16);

  fill(255, 255, 255, 40);
  ellipse(295, 214, 10, 26);

  fill(40, 38, 42);
  triangle(270, 300, 300, 318, 330, 300);
}