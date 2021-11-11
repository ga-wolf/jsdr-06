// Creating a todo application

// Keep track of those todos

// Todos is going to be an array
//  Each todo is going to have:
//   - a content property (a string)
//   - an isCompleted property (a boolean)

let allTodos = [
  { content: "My first todo", isCompleted: false },
  { content: "My second todo", isCompleted: true },
  { content: "My third todo", isCompleted: true },
  { content: "My fourth todo", isCompleted: true },
];

function addTodo(content) {
  let newTodo = {
    content: content,
    isCompleted: false,
  };
  allTodos.push(newTodo);
}

// Add todos
//   This will be a function
//      It should receive some content
//      It'll create a todo and add it to our todos array

// Toggle todos
//   This will be a function
//      Find a particular todo
//      Toggle it's isCompleted property

function toggleTodo(content) {
  // Iterate through all todo items
  for (let i = 0; i < allTodos.length; i += 1) {
    // Access the current todo item
    let currentTodo = allTodos[i];
    // Check to see if the provided content is equal to the
    //  current todo item's content
    if (content === currentTodo.content) {
      // Toggle the isCompleted property
      currentTodo.isCompleted = !currentTodo.isCompleted;
    }
  }
}

// Create a function called renderTodos
//   It should iterate through allTodos
//     For each todo item in allTodos
//       Create the following markup

function renderTodos() {
  let todosDiv = document.querySelector(".current");
  // Make sure there are no todos currently showing
  todosDiv.innerHTML = "";
  for (let i = 0; i < allTodos.length; i += 1) {
    let currentTodo = allTodos[i];
    let markup = `
      <div class="todo">
        <input type="checkbox">
        <p>${currentTodo.content}</p>
      </div>
    `;
    // Show it to the user by adding it to the end of .current
    todosDiv.innerHTML += markup;
  }
}

renderTodos();

let button = document.querySelector("button");

function handleNewTodo() {
  let input = document.querySelector("input");
  let value = input.value;

  addTodo(value);
  renderTodos();
}

button.addEventListener("click", handleNewTodo);
