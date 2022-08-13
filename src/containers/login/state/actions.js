import Axios from 'axios';
import * as ActionTypes from './actionTypes';

export const setLoginState = (type, payload) => {
  return {type, payload};
}

export const loginRequest = (username, password) => {
  return dispatch => {
    dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_START));
    Axios.post('/api/login', {username, password})
      .then(res => {
        dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_SUCCESS, res.data));
      }).catch(err => {
        dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_ERROR, err));
      });
  }
}

export const logoutRequest = () => {
  return dispatch => {
    //TODO: clear session 
    dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_CLEAR));
  }
}