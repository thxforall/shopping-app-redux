import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/createTodo.js';

export default function InputForm() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (todo.trim() === '') return;
    dispatch(addTodo(todo.trim()));
    setTodo('');
  };

  return (
    <div className="flex justify-center items-center p-6 gap-3">
      <input
        className="input"
        type="text"
        placeholder="NEW MISSION..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button" type="submit" onClick={handleSubmit}>
        ADD!
      </button>
    </div>
  );
}

InputForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
