function handleMouseMove(event) {
  let clientX = event.clientX;
  let clientY = event.clientY;
  let img = document.querySelector("img");
  img.style.left = clientX + "px";
  img.style.top = clientY + "px";
}

window.addEventListener("mousemove", handleMouseMove);
