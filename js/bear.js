var bear = function (p) {
  let eyeSize = 5;
  let hoverThreshold = 20;
  let isMouseOverEyes = false;
  p.setup = function () {
    p.createCanvas(300, 300);
    p.rectMode(p.CENTER);
  };

  p.draw = function () {
    let headSize = 150;

    let centerY = 140;
    let centerX = 200;

    let colorLightBrown = [234, 221, 202];
    let colorDarkBrown = [111, 78, 55];
    let colorHat = [89, 70, 103];

    let smCircle = (x, y, l = 10, w) => p.ellipse(x, y, l, w ? w : l);

    // Ears (outside)
    p.fill(colorDarkBrown);
    smCircle(172, centerY - 75, 25, 30);
    smCircle(229, centerY - 74, 25, 30);

    // Ears (inside)
    p.fill(colorLightBrown);
    smCircle(172, centerY - 75, 15, 20);
    smCircle(229, centerY - 74, 15, 20);

    // Body
    p.fill(colorDarkBrown);
    p.ellipse(centerX, centerY, headSize, headSize);

    // Legs
    p.fill(colorDarkBrown);
    p.rect(centerX - 65, centerY + 55, 70, 40);
    p.rect(centerX + 65, centerY + 55, 70, 40);

    // Arms
    p.rect(centerX - 35, centerY + 55, 30, 40);
    p.rect(centerX + 35, centerY + 55, 30, 40);
    p.noStroke();

    // Overlap
    p.fill(colorDarkBrown);
    p.rect(centerX - 35, centerY + 35, 40, 10);
    p.rect(centerX + 35, centerY + 35, 40, 10);
    p.rect(centerX + 35, centerY + 35, 40, 10);

    // Snout
    p.stroke(0, 0, 0);
    p.fill(colorLightBrown);
    smCircle(centerX, centerY - 50, 30, 20);
    p.fill(0, 0, 0);
    smCircle(centerX, centerY - 54, 10, 5);

    // Eyes
    // smCircle(220, centerY - 60, 5);
    // smCircle(182, centerY - 60, 5);
    p.fill(255); // Fill with white
    let eyeEllipseHeight = isMouseOverEyes ? eyeSize * 0.7 : eyeSize;
    smCircle(220, centerY - 60, eyeSize, eyeEllipseHeight);
    smCircle(182, centerY - 60, eyeSize, eyeEllipseHeight);

    // Check if the mouse is over the eyes
    let distanceToEye1 = p.dist(220, centerY - 60, p.mouseX, p.mouseY);
    let distanceToEye2 = p.dist(182, centerY - 60, p.mouseX, p.mouseY);
    // isMouseOverEyes =
    //   distanceToEye1 < eyeSize / 2 || distanceToEye2 < eyeSize / 2;
    isMouseOverEyes =
      distanceToEye1 < hoverThreshold || distanceToEye2 < hoverThreshold;

    // If the mouse is over the eyes, reduce their size and height
    if (isMouseOverEyes) {
      eyeSize = p.lerp(eyeSize, 3, 0.2); // Adjust the second argument to control the speed of closing
    } else {
      // Otherwise, return them to their original size
      eyeSize = p.lerp(eyeSize, 5, 0.2); // Adjust the second argument to control the speed of opening
    }

    // Mouth
    p.noFill();
    p.arc(centerX - 5, centerY - 52, 10, 10, 0, p.HALF_PI);
    p.arc(centerX + 5, centerY - 52, 10, 10, p.HALF_PI, p.PI);

    // Hat
    p.fill(colorHat);
    p.rect(centerX, centerY - 76, 25, 8);
    p.triangle(
      centerX + 10,
      centerY - 80,
      centerX + -10,
      centerY - 80,
      centerX,
      centerY - 120
    );
  };
};

var myp5 = new p5(bear, "bear");
