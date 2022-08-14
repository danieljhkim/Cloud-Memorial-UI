import * as ActionTypes from './actionTypes';
import AuthService from '../../services/auth.service';

export const register = (username, email, password) => async (dispatch) => {
  try {
    const resp = await AuthService.register(username, email, password);
    dispatch({type: ActionTypes.REGISTER_SUCCESS, payload: resp.data});
  } catch (err) {
    dispatch({type: ActionTypes.REGISTER_FAIL, payload: err});
  }
};