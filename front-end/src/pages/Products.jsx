import React from 'react';
import Card from '../component/card';
import '../styles/bar.css';
import logo from '../images/logo.png';

const Products = () => (
  <div className="products">
    <img src={ logo } alt="logo" className="backgroundImage" />
    <div className="segredo">
      <button type="button" className="name"><h2>Vinicius Marcelino Silva</h2></button>
      <div className="bar">
        <button type="button">Produtos</button>
        <button type="button">Meus pedidos</button>
        <button type="button" className="carrinho">Ver Carrinho: R$: 34:99</button>
      </div>
      <button type="button" className="sair">Sair</button>
    </div>
    <div className="container2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div className="showLogo" />
  </div>
);

export default Products;
