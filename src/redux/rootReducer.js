import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer';

const combinedReducer = combineReducers({
  loginReducer
});

export default combinedReducer;