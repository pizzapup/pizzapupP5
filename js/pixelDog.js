function setup() {
  let canvas = createCanvas(200, 200);
  canvas.parent("pixelCanvas"); // Attach the canvas to the pixelCanvas div
  pixelDensity(1); // Ensures each pixel maps to a single screen pixel
  background(255); // Set the background color to white
  noLoop(); // Only draw once
}

function draw() {
  stroke(0); // Set the outline color for shapes
  strokeWeight(1); // Set the outline thickness (optional)

  // Body
  fill(100); // Dark gray color for the body
  rect(70, 130, 60, 40);

  // Head
  fill(150); // Light gray color for the head
  rect(100, 80, 20, 40);

  // Ears
  fill(150); // Light gray color for the ears
  triangle(100, 80, 110, 70, 120, 80); // Left ear
  triangle(120, 80, 130, 70, 140, 80); // Right ear

  // Eyes
  fill(255); // White color for the eyes
  ellipse(105, 100, 10, 10); // Left eye
  ellipse(125, 100, 10, 10); // Right eye

  // Nose
  fill(0); // Black color for the nose
  ellipse(115, 115, 5, 5); // Nose

  // Mouth
  noFill();
  arc(120, 120, 20, 10, 0, PI); // Mouth
}
