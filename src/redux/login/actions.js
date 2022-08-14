import * as ActionTypes from './actionTypes';
import AuthService from '../../services/auth.service';

export const setLoginState = (type, payload) => {
  return {type, payload};
}

const payload = {
  auth: {
    isLoggedIn: true,
    user: {
      username: 'admin',
      email: 'email',
      roles: ['admin'],
      accessToken: 'accessToken',
    }
  }
}

export const loginRequest = (username, password) => {
  return dispatch => {
    dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_START));
    if(username === 'admin' && password === 'admin') { //FIXME: remove after development

      dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_SUCCESS, payload));
      return;
    } else {
      dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_ERROR, {error: 'Invalid username or password'}));
    }
    AuthService.login('/api/login', {username, password})
      .then(res => {
        dispatch(setLoginState(ActionTypes.LOGIN_REQUEST_SUCCESS, res.data)); //FIXME: extract resp data
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
