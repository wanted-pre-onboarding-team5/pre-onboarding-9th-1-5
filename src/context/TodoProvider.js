import { createContext, useReducer } from 'react';
import todoReducer from './todoReducer';

export const dispatchContext = createContext('');
export const todoContext = createContext('');

const initialState = [];

export default function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </todoContext.Provider>
  );
}
