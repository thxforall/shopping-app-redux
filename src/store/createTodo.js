import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  type: 'active',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions;

export const selectActiveTodos = (state) => 
  state.todos.todos.filter(todo => !todo.completed);

export const selectCompletedTodos = (state) => 
  state.todos.todos.filter(todo => todo.completed);

export default todoSlice.reducer;
