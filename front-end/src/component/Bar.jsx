import '../styles/bar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import '../styles/cart.css';
import Order from '../pages/Order';

const Bar = () => {
  const [cart, setCart] = useState(false);
  const [order, setOrnder] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('user');
    navigate('/login');
  };

  const toCart = () => setCart(true);
  const toOrder = () => setOrnder(true);

  const close = () => {
    setCart(false);
    setOrnder(false);
  };

  return (
    <div className="segredo">
      <button type="button" className="name">
        <h2 data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </h2>
      </button>
      <div className="bar">
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          Produtos
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ toOrder }
        >
          Meus pedidos
        </button>
        <button
          data-testid="customer_products__checkout-bottom-value"
          type="button"
          className={ `${cart} carrinho` }
          onClick={ toCart }
        >
          Ver Carrinho: R$: 34:99
        </button>
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        className="sair"
        onClick={ logout }
      >
        Sair
      </button>
      {cart && <Cart />}
      {order && <Order />}
      {
        (cart || order)
          && <button onClick={ close } className="blur" type="button"> </button>
      }
    </div>
  );
};

export default Bar;
