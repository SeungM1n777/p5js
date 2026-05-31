function setup() {
  createCanvas(600, 400);
  background(236, 229, 216);

  noStroke();
  fill(210, 223, 235);
  rect(0, 0, 600, 160);
  fill(236, 229, 216);
  rect(0, 160, 600, 140);
  fill(58, 62, 79);
  rect(0, 300, 600, 100);

  stroke(248, 244, 238);
  strokeWeight(4);
  fill(195, 92, 70);
  rect(55, 120, 135, 200);
  fill(232, 181, 84);
  triangle(55, 120, 122, 70, 190, 120);

  stroke(58, 62, 79);
  strokeWeight(2);
  fill(248, 244, 238);
  rect(85, 155, 35, 35);
  stroke(248, 244, 238);
  fill(58, 62, 79);
  rect(125, 155, 35, 35);

  stroke(58, 62, 79);
  strokeWeight(3);
  fill(232, 181, 84);
  rect(85, 205, 75, 50);
  stroke(248, 244, 238);
  fill(58, 62, 79);
  rect(105, 265, 35, 55);

  stroke(248, 244, 238);
  strokeWeight(4);
  fill(51, 98, 137);
  rect(235, 75, 130, 255);
  fill(58, 62, 79);
  rect(255, 40, 90, 35);

  stroke(58, 62, 79);
  strokeWeight(2);
  fill(248, 244, 238);
  rect(255, 105, 90, 30);
  fill(232, 181, 84);
  rect(255, 150, 90, 30);
  fill(195, 92, 70);
  rect(255, 195, 90, 30);
  fill(248, 244, 238);
  rect(275, 245, 50, 85);

  stroke(248, 244, 238);
  strokeWeight(3);
  fill(232, 181, 84);
  quad(420, 120, 545, 95, 565, 320, 405, 320);

  stroke(58, 62, 79);
  strokeWeight(2);
  fill(58, 62, 79);
  rect(445, 145, 75, 35);
  fill(248, 244, 238);
  rect(438, 195, 75, 35);
  fill(195, 92, 70);
  rect(430, 245, 75, 35);

  stroke(248, 244, 238);
  strokeWeight(3);
  fill(244, 205, 98);
  ellipse(467, 67, 75, 75);

  line(0, 300, 600, 300);
  line(210, 95, 210, 335);
  line(385, 95, 385, 335);

  strokeWeight(6);
  line(20, 350, 580, 350);
}