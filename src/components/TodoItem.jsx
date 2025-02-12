import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from '../store/createTodo.js';

export default function TodoItem({ todo, type }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editText.trim() !== '' && editText !== todo.text) {
      dispatch(editTodo({ id: todo.id, text: editText.trim() }));
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 ${
      type === 'completed' ? 'completed-card' : 'todo-card'
    }`}>
      {isEditing ? (
        <input
          type="text"
          className="flex-1 mr-2 input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer px-2 py-1 font-['Press_Start_2P'] text-sm ${
            todo.completed ? 'text-gray-400' : 'text-gray-700'
          }`}
          onClick={() => type !== 'completed' && setIsEditing(true)}
          title={type !== 'completed' ? "CLICK TO EDIT" : undefined}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {type === 'completed' ? (
          <>
            <button 
              className="todoButton" 
              title="RESTART"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              ↩
            </button>
            <button 
              className="todoButton delete" 
              title="DELETE"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ×
            </button>
          </>
        ) : (
          <>
            <button 
              className="todoButton" 
              title="COMPLETE"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              ✓
            </button>
            <button 
              className="todoButton delete" 
              title="DELETE"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ×
            </button>
          </>
        )}
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  type: PropTypes.oneOf(['active', 'completed']).isRequired,
};
