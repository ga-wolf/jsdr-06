function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("ghostwhite");
  strokeWeight(5);
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// function draw() {
//   stroke(
//     Math.random() * 255, // Red
//     Math.random() * 255, // Green
//     Math.random() * 255, // Blue
//   );
//   line(window.innerWidth / 2, window.innerHeight / 2, mouseX, mouseY);

//   stroke("black");
//   if (Math.random() > 0.5) {
//     rect(mouseX - 25, mouseY - 25, 50, 50);
//   } else {
//     circle(mouseX, mouseY, 50);
//   }
// }
