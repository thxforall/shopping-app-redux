import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoList from './components/ToDoList';
import { useSelector } from 'react-redux';
import { selectActiveTodos, selectCompletedTodos } from './store/createTodo';

function App() {
  const activeTodos = useSelector(selectActiveTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  return (
    <div className="min-h-screen bg-[#F7F9FC] pattern-grid-lg">
      <Header />
      <div className="max-w-2xl mx-auto p-4 relative mt-2">
        <InputForm />

        <div className="space-y-8">
          <section className="bg-white border-4 border-[#2C3E50] p-6 shadow-[8px_8px_0_#2C3E50] pixel-corners">
            <h2 className="text-xl mb-6 text-[#2C3E50] flex items-center gap-3 font-['Press_Start_2P']">
              <div className="w-4 h-4 bg-[#FF6B6B] border-2 border-[#2C3E50] pixel-corners"></div>
              ACTIVE
              {activeTodos.length > 0 && (
                <span className="text-sm text-[#FF6B6B] ml-2">
                  [{activeTodos.length}]
                </span>
              )}
            </h2>
            <TodoList type="active" />
          </section>

          {completedTodos.length > 0 && (
            <section className="bg-[#F8FFFD] border-4 border-[#95E1D3] p-6 shadow-[8px_8px_0_#95E1D3] pixel-corners">
              <h2 className="text-xl mb-6 text-[#2C3E50] flex items-center gap-3 font-['Press_Start_2P']">
                <div className="w-4 h-4 bg-[#4ECDC4] border-2 border-[#2C3E50] pixel-corners"></div>
                CLEAR!
                <span className="text-sm text-[#4ECDC4] ml-2">
                  [{completedTodos.length}]
                </span>
              </h2>
              <TodoList type="completed" />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
