import '../styles/bar.css';
import '../styles/cart.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import CustomerContext from '../context/CustomerContext';
import * as path from '../utils/paths';

const Bar = () => {
  const [order, setOrnder] = useState(false);
  const { totalPrice, modalCart, setModalCart } = useContext(CustomerContext);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    if (url === '/customer/checkout') setModalCart(true);
    if (url !== '/customer/checkout') setModalCart(false);
  });

  const logout = () => {
    localStorage.clear('user');
    navigate(path.login);
  };

  const toCart = () => {
    navigate(path.checkout);
  };

  const toProducts = () => {
    navigate(path.product);
  };

  const toOrder = () => setOrnder(true);

  const close = () => {
    setOrnder(false);
    navigate(path.product);
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
          onClick={ toProducts }
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
          data-testid="customer_products__button-cart"
          type="button"
          className={ `${modalCart} carrinho` }
          onClick={ toCart }
          disabled={ totalPrice === '0.00' }
        >
          <span>Ver Carrinho: R$:</span>
          <span data-testid="customer_products__checkout-bottom-value">
            {
              totalPrice.toString().replace('.', ',')
            }
          </span>
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
      {modalCart && <Cart />}
      {order && <Order />}
      {
        (modalCart || order)
          && <button onClick={ close } className="blur" type="button"> </button>
      }
    </div>
  );
};

export default Bar;
