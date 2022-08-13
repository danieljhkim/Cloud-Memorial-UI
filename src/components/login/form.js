import react, { useState } from 'react';
import './styles.css';

function Form(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const loginValidate = (e) => {
    e.preventDefault();
    props.loginRequest(username, password);
  }

  return (
    <div className="login-form-outer-cont">
      <form>
        <input onChange={handleUsernameChange} type="text" />
        <input onChange={handlePasswordChange} type="password" />
        <button onClick={loginValidate}>Login</button>
      </form>
    </div>
  );
}

export default Form;