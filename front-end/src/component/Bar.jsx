import '../styles/bar.css';
import '../styles/cart.css';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import CustomerContext from '../context/CustomerContext';
import * as path from '../utils/paths';
import { requestGet, setToken } from '../service/request';

const Bar = () => {
  const {
    orders,
    setOrders,
    totalPrice,
    modalCart,
    setModalCart,
    modalOrder,
    setModalOrder,
  } = useContext(CustomerContext);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    if (url === path.checkout) setModalCart(true);
    if (url !== path.checkout) setModalCart(false);
    if (url === path.orderCustomer) setModalOrder(true);
    if (url !== path.orderCustomer) setModalOrder(false);
  });

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('user')).token);
    const getOrders = async () => {
      const allOrders = await requestGet('/sales');
      setOrders(allOrders);
    };

    getOrders();
  }, [setOrders]);

  useEffect(() => {
    console.log(orders.length);
    if (orders.length !== 0) {
      return setDisabled(false);
    }
  }, [orders]);

  const logout = () => {
    localStorage.clear('user');
    setOrders([]);
    navigate(path.login);
  };

  const toCart = () => navigate(path.checkout);
  const toProducts = () => navigate(path.product);
  const toOrder = () => navigate(path.orderCustomer);
  const close = () => navigate(path.product);

  return (
    <div className="segredo">
      <button type="button" className="name">
        <h2 data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
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
            {totalPrice.toString().replace('.', ',')}
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
      {modalOrder && <Order />}
      {(modalCart || modalOrder) && (
        <button onClick={ close } className="blur" type="button">
          {' '}
        </button>
      )}
    </div>
  );
};

export default Bar;
