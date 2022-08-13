import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/login/actions';
import LoginForm from '../../components/login/form';
import './styles.css';

function LoginPage(props) {

  return (
    <div className="login-page-outer-cont">
      <div>
        <LoginForm loginRequest={props.loginRequest}></LoginForm>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.loginReducer?.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (username, password) => dispatch(actions.loginRequest(username, password)),
    logoutRequest: () => dispatch(actions.logoutRequest())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
