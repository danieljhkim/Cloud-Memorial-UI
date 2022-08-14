import * as ActionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  errorCause: null,
  message: null,
  registerSuccess: null
};

export function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER_REQUEST_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        error: false,
        errorCause: null,
        isLoading: false,
        registerSuccess: true,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: true,
        errorCause: action.payload?.error,
        registerSuccess: false,
      };
    case ActionTypes.SET_MESSAGE:
      return {
        ...state,
        message:  action.payload?.message
      };
    default:
      return state;
  }
};