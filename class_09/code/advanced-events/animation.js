// Fade out the image

// Find the image DOM Node
let img = document.querySelector("img");

// Set the starting point (opacity 1)
img.style.opacity = 1;

// Create a function that decreases that opacity
function fadeOut() {
  img.style.opacity -= 0.1;

  // If the opacity hasn't yet reached 0, do this...
  setTimeout(fadeOut, 200);
}

fadeOut();
