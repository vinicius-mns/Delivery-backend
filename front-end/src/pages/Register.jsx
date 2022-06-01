import React from 'react';
import logo from '../images/logo.png';

const Register = () => (
  <div className="container">
    <img src={ logo } alt="logo" className="logo2" />
    <div className="box">
      <div className="item">
        <h2>Nome</h2>
        <input
          type="text"
          data-testid="1"
          onChange={
            ({ target: { value } }) => setEmail(value)
          }
        />
      </div>

      <div className="item">
        <h2>Email</h2>
        <input
          type="text"
          data-testid="1"
          onChange={
            ({ target: { value } }) => setEmail(value)
          }
        />
      </div>

      <div className="item">
        <h2>Senha</h2>
        <input
          type="text"
          data-testid="1"
          onChange={
            ({ target: { value } }) => setEmail(value)
          }
        />
      </div>
      <div className="buttons">
        <button type="button">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
);

export default Register;
