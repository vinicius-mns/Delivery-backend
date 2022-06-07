import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CustomerContext from '../context/CustomerContext';

function CustomerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [modalCart, setModalCart] = useState(false);
  const [modalOrder, setModalOrder] = useState(false);
  const [totalPrice, setTotalPrice] = useState('0,00');

  const context = {
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
    modalCart,
    setModalCart,
    modalOrder,
    setModalOrder,
  };

  return (
    <CustomerContext.Provider value={ context }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;
