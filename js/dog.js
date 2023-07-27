var dog = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  p.draw = function () {
    p.background(220);
    // Dog body
    p.fill(150, 150, 150);
    p.ellipse(200, 300, 150, 100);

    // Dog head
    p.fill(150, 150, 150);
    p.ellipse(300, 240, 80, 80);

    // Dog ears
    p.fill(150, 150, 150);
    p.ellipse(265, 195, 40, 40);
    p.ellipse(335, 195, 40, 40);

    // Dog eyes
    p.fill(0);
    p.ellipse(290, 230, 10, 10);
    p.ellipse(310, 230, 10, 10);

    // Dog nose
    p.fill(100, 70, 40);
    p.ellipse(300, 250, 20, 15);

    // Dog mouth
    p.stroke(0);
    p.line(290, 260, 310, 260);

    // Dog tail
    p.stroke(150, 150, 150);
    p.strokeWeight(8);
    p.line(130, 270, 80, 220);
  };
};

var myp5 = new p5(dog, "dog");
