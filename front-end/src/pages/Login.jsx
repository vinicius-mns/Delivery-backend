import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from '../service/request';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const validateLogin = () => {
    const seis = 6;
    const P = pass.length >= seis;
    const regex = /\S+@\S+\.\S+/;
    const E = regex.test(email);

    return !(P && E);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/login';
      const { token, user } = await requestLogin(endpoint, { email, pass });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          data-testid="1"
          onChange={
            ({ target: { value } }) => setEmail(value)
          }
        />
      </div>
      <div>
        <h2>Senha</h2>
        <input
          type="password"
          data-testid="2"
          onChange={
            ({ target: { value } }) => setPass(value)
          }
        />
      </div>
      <button type="button" disabled={ validateLogin() } onClick={ (e) => login(e) }>
        Login
      </button>
      <button
        type="submit"
        onClick={
          () => navigate('/register')
        }
      >
        Ainda não tenho conta
      </button>
    </div>
  );
};

export default Login;
