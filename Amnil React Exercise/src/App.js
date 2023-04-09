import { useState, useMemo } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { About } from "./About.js";
import Todo from "./components/Todo.js";

function useQuery() {
  return new URLSearchParams(window.location.search);
}

function TodoList() {
  const query = useQuery();
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text, completed: false }]);
    setText("");
  };

  const handleComplete = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].completed = !newTodos[index].completed;
      return newTodos;
    });
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const filteredTodos = useMemo(() => {
    const showCompleted = query.get("completed") === "true";
    return todos.filter((todo) =>
      showCompleted ? todo.completed : !todo.completed
    );
  }, [query, todos]);

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {filteredTodos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
