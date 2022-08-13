import * as ActionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  authenticated: false,
  error: false,
  errorCause: null,
  user: null,
  role: null,
  loginSession: {}
};

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
        loginSession: action.payload?.session,
        isLoading: false,
        authenticated: true,
        username: action.payload?.username,
        role: action.payload?.role,
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
        username: null,
        role: null,
        error: false,
        errorCause: null,
      };
    default:
      return state;
  }
};