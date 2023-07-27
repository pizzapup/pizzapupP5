class Eye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.blinking = false;
    this.eyeColor = color(0);
  }

  draw() {
    const centerX = this.x;
    const centerY = this.y;
    const eyeRadius = 15; // Adjust this value to change the eye's size
    const outerBoundary = eyeRadius + 15; // 15 pixels outside the eye white

    // Calculate the distance from the cursor to the eye's center
    const distance = dist(centerX, centerY, mouseX, mouseY);

    // Calculate the angle between the eye center and the mouse position
    const angle = atan2(mouseY - centerY, mouseX - centerX);

    // Calculate the maximum radius for the pupil
    const maxPupilRadius = 8;

    // Calculate the pupil radius based on the distance from the center,
    // but ensure it doesn't go beyond the eye's boundaries
    const pupilRadius = min(
      map(distance, 0, eyeRadius, 0, maxPupilRadius),
      maxPupilRadius
    );

    // Eye pupil color
    let pupilColor;

    // If the mouse is within 15px of the eye, make the pupil red, if it is more than 15px away make it black, if it is inside of the eye white, make it blue.
    if (distance > outerBoundary) {
      pupilColor = color(0); // Black
    } else if (distance > eyeRadius && distance <= outerBoundary) {
      pupilColor = color(255, 0, 0); // Red
    } else {
      pupilColor = color(0, 0, 255); // Blue
    }

    // Calculate the pupil position based on the angle and limited pupil radius
    const pupilX = centerX + cos(angle) * pupilRadius;
    const pupilY = centerY + sin(angle) * pupilRadius;

    // Eye white
    fill(255);
    ellipse(centerX, centerY, eyeRadius * 2, eyeRadius * 2);

    // Eye pupil
    fill(pupilColor);
    ellipse(pupilX, pupilY, pupilRadius * 2, pupilRadius * 2);
  }

  blink() {
    if (this.blinking) {
      this.eyeColor = color(255);
    } else {
      this.eyeColor = color(0);
    }
  }

  checkMouseHover() {
    const distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < 15) {
      this.blinking = true;
    } else {
      this.blinking = false;
    }
  }
}

let eye;

function setup() {
  createCanvas(400, 400);
  eye = new Eye(200, 200);
}

function draw() {
  background(220);
  eye.checkMouseHover();
  eye.blink();
  eye.draw();
}
