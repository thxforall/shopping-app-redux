import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectActiveTodos, selectCompletedTodos } from '../store/createTodo';

export default function TodoList({ type }) {
  const todos = useSelector(type === 'completed' ? selectCompletedTodos : selectActiveTodos);

  if (todos.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4 font-['Press_Start_2P'] text-sm">
        {type === 'completed' ? 'NO MISSIONS CLEARED!' : 'NO ACTIVE MISSIONS!'}
      </p>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          type={type}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  type: PropTypes.oneOf(['active', 'completed']).isRequired,
};
