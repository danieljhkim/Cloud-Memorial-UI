import react, { useState } from 'react';
import './styles.css';

function RegisterForm(props) {

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

  const registerValidate = (e) => {
    e.preventDefault();
    props.loginRequest(username, password);
  }

  return (
    <div className="register-form-outer-cont">
      <form>
        <input onChange={handleUsernameChange} type="text" />
        <input onChange={handlePasswordChange} type="password" />
        <button onClick={registerValidate}>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;