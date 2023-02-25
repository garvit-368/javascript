class Todo {
    constructor(task) {
      this.task = task;
      this.completed = false;
    }
  }
  
  let todoList = [];
  
  const loadTodoList = () => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      todoList = JSON.parse(storedTodoList);
    }
    renderTodoList();
  };
  
  const saveTodoList = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
  };
  
  const addTodo = () => {
    const input = document.getElementById("todo-input");
    const task = input.value;
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
    const newTodo = new Todo(task);
    todoList.push(newTodo);
    input.value = "";
    saveTodoList();
    renderTodoList();
  };
  
  const toggleTodo = (index) => {
    todoList[index].completed = !todoList[index].completed;
    saveTodoList();
    renderTodoList();
  };
  
  const renderTodoList = () => {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";
    todoList.forEach((todo, index) => {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("click", () => toggleTodo(index));
      const label = document.createElement("label");
      label.textContent = todo.task;
      li.appendChild(checkbox);
      li.appendChild(label);
      list.appendChild(li);
    });
  };
  
  document.getElementById("add-btn").addEventListener("click", addTodo);
  
  loadTodoList();
  
