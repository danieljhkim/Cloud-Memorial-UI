import * as ActionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  authenticated: JSON.parse(localStorage.getItem("user"))?.authenticated || false,
  error: false,
  errorCause: null,
  auth: JSON.parse(localStorage.getItem("user"))?.auth || {}
};

/*
  auth  {
    isLoggedIn: true,
    username: 'admin',
    email: 'email',
    roles: ['admin'],
    accessToken: 'accessToken',
    }
  }
*/

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        error: false,
        errorCause: null,
        isLoading: false,
        authenticated: true,
        auth: action.payload?.auth,
      };
    case ActionTypes.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: true,
        errorCause: action.payload?.error,
      };
    case ActionTypes.LOGIN_REQUEST_CLEAR:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        auth: null,
        role: null,
        error: false,
        errorCause: null,
      };
    default:
      return state;
  }
};