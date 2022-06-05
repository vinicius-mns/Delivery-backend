import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';
import '../styles/bar.css';

const Bar = () => {
  const { totalPrice } = useContext(CustomerContext);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('user');
    navigate('/login');
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
        >
          Meus pedidos
        </button>
        <button
          data-testid="customer_products__checkout-bottom-value"
          type="button"
          className="carrinho"
        >
          {`Ver Carrinho: R$: ${totalPrice}`}
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
