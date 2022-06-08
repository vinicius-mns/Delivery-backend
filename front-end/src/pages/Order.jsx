import React, { useEffect, useState } from 'react';
import CardOrder from '../component/CardOrder';
import { requestGet, setToken } from '../service/request';
import '../styles/order.css';

// const pedidos = [
//   { order: 1, status: 'Pendente', totalPrice, saleDate },
// ];

// const coisa = (event) => {
//   event.currentTarget.classList.toggle('fullSize');
// };

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('user')).token);
    const getOrders = async () => {
      const allOrders = await requestGet('/sales');
      setOrders(allOrders);
    };

    getOrders();
  }, []);

  return (
    <div className="order">
      <h2>Meus pedidos</h2>
      <div className="orderContainer">
        { console.log(orders) }
        {
          orders?.map(({ id, status, saleDate, totalPrice }, i) => (
            <CardOrder
              order={ id }
              status={ status }
              key={ i }
              date={ saleDate }
              price={ totalPrice }
            />
          ))
        }
      </div>
    </div>
  );
};

export default Order;
