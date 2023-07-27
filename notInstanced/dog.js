function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Dog body
  fill(150, 150, 150);
  ellipse(200, 300, 150, 100);

  // Dog head
  fill(150, 150, 150);
  ellipse(300, 240, 80, 80);

  // Dog ears
  fill(150, 150, 150);
  ellipse(265, 195, 40, 40);
  ellipse(335, 195, 40, 40);

  // Dog eyes
  fill(0);
  ellipse(290, 230, 12, 12);
  ellipse(310, 230, 12, 12);

  // Dog nose
  fill(100, 70, 40);
  ellipse(300, 250, 20, 15);

  // Dog mouth
  stroke(0);
  line(290, 260, 310, 260);

  // Dog tail
  stroke(150, 150, 150);
  strokeWeight(8);
  line(130, 270, 80, 220);
}
