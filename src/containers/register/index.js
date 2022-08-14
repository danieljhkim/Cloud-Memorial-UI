import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/login/actions';
import RegisterForm from '../../components/login/form';
import './styles.css';

function RegisterPage(props) {

  return (
    <div className="register-page-outer-cont">
      <div>
        <RegisterForm></RegisterForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
