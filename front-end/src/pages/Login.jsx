import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../component/Item';
import logo from '../images/logo.png';
import { requestPost } from '../service/request';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    const seis = 6;
    const P = password.length >= seis;
    const regex = /\S+@\S+\.\S+/;
    const E = regex.test(email);

    return !(P && E);
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/login';
      const { token, user } = await requestPost(endpoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      if (user.role === 'customer') navigate('/customer/products');
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePass = ({ target: { value } }) => setPassword(value);

  return (
    <div className="container">
      <img src={ logo } alt="logo" className="logo" />
      <div className="box">
        <Item title="Login" testId="1" type="text" handleChange={ handleEmail } />
        <Item
          title="Senha"
          testId="2"
          type="password"
          handleChange={ handlePass }
        />

        <div className="buttons">
          <button
            type="button"
            disabled={ validateLogin() }
            onClick={ (e) => login(e) }
            data-testid={ 3 }
          >
            Login
          </button>
          <button
            type="submit"
            onClick={ () => navigate('/register') }
            data-testid={ 4 }
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
