import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'reux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...[thunk]))
);

export default store;