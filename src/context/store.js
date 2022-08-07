import React, { createContext, useReducer } from 'react';
import { ContextReducer } from './reducer';

const initialState = {
  isLoggedIn: false,
}

const store = ({children}) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState);

export default store;