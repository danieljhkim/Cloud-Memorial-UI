import React from 'react';
import LoginPage from './containers/login';
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="App">
      <LoginPage {...props}></LoginPage>s
    </div>
  );
}

function mapStateToProps(state) {
  return {
    username: state.loginReducer?.username,
    role: state.loginReducer?.role,
    authenticated: state.loginReducer?.authenticated,
  }
}

export default connect(mapStateToProps)(App);
