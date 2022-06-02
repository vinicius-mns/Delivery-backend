import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import Item from '../component/Item';
import { requestPost } from '../service/request';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateRegister = () => {
    const passwordLength = 6;
    const nameLength = 12;

    const N = name.length >= nameLength;

    const P = password.length >= passwordLength;
    const regex = /\S+@\S+\.\S+/;
    const E = regex.test(email);

    return !(P && E && N);
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/register';
      const { token, user } = await requestPost(endpoint, {
        name,
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify({ token, ...user }));
      navigate('/customer/products');
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePass = ({ target: { value } }) => setPassword(value);
  const handleName = ({ target: { value } }) => setName(value);

  return (
    <div className="container">
      <img src={ logo } alt="logo" className="logo" />
      <div className="box">
        <Item title="Nome" testId={ 6 } type="text" handleChange={ handleName } />
        <Item title="Email" testId={ 7 } type="text" handleChange={ handleEmail } />
        <Item
          title="Senha"
          testId={ 8 }
          type="password"
          handleChange={ handlePass }
        />
        <div className="buttons">
          <button
            type="button"
            disabled={ validateRegister() }
            onClick={ (e) => register(e) }
            data-testid={ 9 }
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
