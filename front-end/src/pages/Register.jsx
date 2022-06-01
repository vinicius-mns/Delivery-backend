import React from 'react';
import logo from '../images/logo.png';
import Item from '../component/Item';

const Register = () => (
  <div className="container">
    <img src={ logo } alt="logo" className="logo" />
    <div className="box">
      <Item title="Nome" testId={ 1 } type="text" />
      <Item title="Email" testId={ 2 } type="text" />
      <Item title="Senha" testId={ 3 } type="password" />
      <div className="buttons">
        <button type="button">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
);

export default Register;
