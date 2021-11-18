// let heading = document.querySelector("h1");
// function onHeadingClick(event) {
//   event.stopPropagation();
//   console.log("The heading was clicked");
// }
// heading.addEventListener("click", onHeadingClick);

// let div = document.querySelector("div");
// function onDivClick() {
//   console.log("The div was clicked");
// }
// div.addEventListener("click", onDivClick);

// function onBodyClick() {
//   console.log("The body was clicked");
// }
// document.body.addEventListener("click", onBodyClick);

// let allListItems = document.querySelectorAll("li");

// function handleListItemClick() {
//   console.log("A list item was clicked");
// }

// allListItems[0].addEventListener("click", handleListItemClick);
// allListItems[1].addEventListener("click", handleListItemClick);
// allListItems[2].addEventListener("click", handleListItemClick);

function pageLoaded() {
  // This will load once the DOM Tree has been set up
  // It is safe now to use querySelector and querySelectorAll
  let list = document.querySelector("ul");

  function onItemClick(event) {
    let targetType = event.target.tagName;
    if (targetType === "LI") {
      let currentColor = event.target.style.color;
      if (currentColor === "red") {
        event.target.style.color = "black";
      } else {
        event.target.style.color = "red";
      }
    }
  }

  list.addEventListener("click", onItemClick);
}

document.addEventListener("DOMContentLoaded", pageLoaded);
