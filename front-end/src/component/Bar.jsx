import '../styles/bar.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as path from '../utils/paths';
import '../styles/cart.css';

const Bar = () => {
  const [produtos, setProdutos] = useState('selected');
  const [pedidos, setPedidos] = useState('');
  const [carrinho, setCarrinho] = useState(false);

  const location = useLocation();

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('user');
    navigate('/login');
  };

  const toOrders = () => {
    if (location.pathname !== path.orders) navigate(path.orders);
  };

  const toProducts = () => {
    if (location.pathname !== path.products) navigate(path.products);
  };

  useEffect(() => {
    switch (location.pathname) {
    case path.products:
      setProdutos('selected');
      break;
    case path.orders:
      setProdutos('');
      setPedidos('selected');
      break;
    case path.cart:
      setCarrinho(true);
      break;
    default:
      break;
    }
  }, [location.pathname]);

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
          className={ produtos }
        >
          Produtos
        </button>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
          onClick={ toOrders }
          className={ pedidos }
        >
          Meus pedidos
        </button>
        <button
          data-testid="customer_products__checkout-bottom-value"
          type="button"
          className={ `${carrinho} carrinho` }
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
    </div>
  );
};

export default Bar;
