let input = document.querySelector("input");

function handleTyping() {
  // Find the span DOM Node in the DOM Tree
  let span = document.querySelector("span");
  // Get the current value of the input
  let value = input.value;
  // Change the span's innerText
  span.innerText = value;
}

input.addEventListener("input", handleTyping);
