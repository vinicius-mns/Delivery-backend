import React from 'react';
import CardOrder from '../component/CardOrder';
import '../styles/order.css';

const pedidos = [
  { order: 1, status: 'Pendente' },
  { order: 2, status: 'Pendente' },
  { order: 3, status: 'Preparando' },
  { order: 4, status: 'Entregue' },
  { order: 5, status: 'Entregue' },
  { order: 6, status: 'Entregue' },
  { order: 7, status: 'Entregue' },
];

// const coisa = (event) => {
//   event.currentTarget.classList.toggle('fullSize');
// };

const Order = () => (
  <div className="order">
    <h2>Meus pedidos</h2>
    <div className="orderContainer">
      {
        pedidos.map(({ order, status }, i) => (
          <CardOrder order={ order } status={ status } key={ i } />
        ))
      }
    </div>
  </div>
);

export default Order;
