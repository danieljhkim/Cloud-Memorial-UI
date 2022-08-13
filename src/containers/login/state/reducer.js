import * as ActionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  user: null,
};

export default function reducer(state = initialState, action) {
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
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case ActionTypes.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.LOGIN_REQUEST_CLEAR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};