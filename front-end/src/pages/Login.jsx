import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../component/Item';
import logo from '../images/logo.png';
import { requestPost } from '../service/request';
import '../styles/login.css';

import * as func from '../functions/login';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/login';
      const { token, user } = await requestPost(endpoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      if (user.role === 'customer') navigate('/customer/products');
      if (user.role === 'seller') navigate('/seller/orders');
      if (user.role === 'admin') navigate('/admin/manage');
    } catch (err) {
      setInvalid(true);
      console.log(err);
      return err;
    }
  };

  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePass = ({ target: { value } }) => setPassword(value);
  const err = 'common_login__element-invalid-email';
  const msg = 'Email ou senha incorretos';

  return (
    <div className="container">
      <img src={ logo } alt="logo" className="logo" />
      <div className="box">
        <Item
          title="Login"
          testId="common_login__input-email"
          type="text"
          handleChange={ handleEmail }
        />
        <Item
          title="Senha"
          testId="common_login__input-password"
          type="password"
          handleChange={ handlePass }
        />
        { invalid && <span className="err" data-testid={ err }>{ msg }</span> }

        <div className="buttons">
          <button
            type="button"
            disabled={ func.validateLogin(email, password) }
            onClick={ (e) => login(e) }
            data-testid="common_login__button-login"
          >
            Login
          </button>
          <button
            type="submit"
            onClick={ () => navigate('/register') }
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
