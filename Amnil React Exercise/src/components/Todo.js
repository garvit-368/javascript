import { useState, useEffect } from 'react';
import './Todo.css';

function Todo ({ todo, index, handleComplete, handleDelete }) {
  const [text, setText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(todo.text);
  }, [todo.text]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setText(todo.text);
  };

  const handleSave = () => {
    setIsEditing(false);
    todo.text = text;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    } else if (event.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`} 
        onClick={() => handleComplete(index)}
        onMouseEnter={() => setIsEditing(true)}
        onMouseLeave={() => setIsEditing(false)}>
      {isEditing ?
        <>
          <input type="text" value={text} onChange={handleTextChange} onKeyDown={handleKeyDown} />
          <button className="todo-button save-button" onClick={handleSave}>Save</button>
          <button className="todo-button cancel-button" onClick={handleCancel}>Cancel</button>
        </>
        :
        <>
          <div className="todo-text">{todo.text}</div>
          <button className="todo-button edit-button" onClick={handleEdit}>Edit</button>
          <button className="todo-button delete-button" onClick={() => handleDelete(index)}>Delete</button>
        </>
      }
    </li>
  );
}

export default Todo;
