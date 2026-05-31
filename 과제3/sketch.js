
/*
[인터랙션 설명]
1. 마우스 이동: 마우스가 캔버스 위에 있으면 캐릭터 머리가 마우스 방향으로 기울어짐 (고개 갸우뚱)
2. 마우스 클릭: 클릭 시 캐릭터가 깜짝 놀라는 표정으로 바뀜 (눈이 커짐)
3. 마우스 버튼 유지: 마우스를 누르고 있는 동안 놀란 표정 유지
4. 마우스가 캔버스를 벗어나면 머리가 정면을 향해 원래대로 돌아옴
5. 키보드 아무 키 누르면 캐릭터가 윙크함 (왼쪽 눈이 감김)
6. 키보드를 누르고 있는 동안 윙크 상태 유지, 떼면 원래대로 돌아옴
7. 마우스 X 위치에 따라 좌우로 최대 15도까지 고개가 기울어짐
8. 마우스 Y 위치에 따라 상하 방향에도 약간 반응하여 생동감 있는 움직임 연출
*/

let headTilt = 0;
let targetTilt = 0;
let isShocked = false;
let isWinking = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  headTilt = lerp(headTilt, targetTilt, 0.12);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    targetTilt = map(mouseX, 0, width, -15, 15);
  } else {
    targetTilt = 0;
  }

  background(235, 240, 245);

  drawBody();

  push();
  translate(300, 185);
  rotate(radians(headTilt));
  translate(-300, -185);
  drawHead();
  pop();
}

function drawBody() {
  noStroke();
  fill(70, 68, 72);
  rect(180, 300, 240, 120, 30);
  fill(55, 53, 57);
  arc(300, 305, 110, 70, 0, PI);
  fill(244, 220, 205);
  rect(265, 255, 70, 60, 20);
  fill(40, 38, 42);
  triangle(270, 300, 300, 318, 330, 300);
}

function drawHead() {
  noStroke();

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

  let eyeW = isShocked ? 44 : 34;
  let eyeH = isShocked ? 26 : 18;
  let pupilSize = isShocked ? 10 : 12;

  fill(255);
  ellipse(255, 183, eyeW, eyeH);
  if (!isWinking) {
    ellipse(345, 183, eyeW, eyeH);
  } else {
    stroke(55, 55, 60);
    strokeWeight(3);
    line(328, 183, 362, 183);
    noStroke();
  }

  fill(45, 35, 30);
  ellipse(255, 184, pupilSize, pupilSize);
  if (!isWinking) {
    ellipse(345, 184, pupilSize, pupilSize);
  }

  fill(255);
  ellipse(252, 181, 4, 4);
  if (!isWinking) {
    ellipse(342, 181, 4, 4);
  }

  noFill();
  stroke(185, 145, 135);
  strokeWeight(2);
  line(300, 188, 296, 220);

  if (isShocked) {
    arc(300, 232, 30, 22, 0, PI);
  } else {
    arc(300, 223, 22, 14, 0.1, PI - 0.1);
    stroke(185, 120, 125);
    strokeWeight(2);
    arc(300, 250, 48, 20, 0.15, PI - 0.15);
  }

  noStroke();
  fill(245, 205, 205, 80);
  ellipse(235, 228, 28, 16);
  ellipse(365, 228, 28, 16);

  fill(255, 255, 255, 40);
  ellipse(295, 214, 10, 26);
}

function mousePressed() {
  isShocked = true;
}

function mouseReleased() {
  isShocked = false;
}

function keyPressed() {
  isWinking = true;
}

function keyReleased() {
  isWinking = false;
}