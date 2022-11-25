import React from 'react';
import LoginPage from './containers/login';
//import HomePage from './containers/home';
import LandingPage from './containers/landing';
import RegisterPage from './containers/register';
import { connect } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App(props) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage></LandingPage>} />
        <Route path="/login" element={<LoginPage {...props}></LoginPage>} />
        <Route path="/register" element={ <RegisterPage></RegisterPage> } />
        {/* <Route path="/forget-password" component={ ForgetPasswordPage } /> */}
        {/* <Route path="/home" component={ HomePage } /> */}
      </Routes>
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
