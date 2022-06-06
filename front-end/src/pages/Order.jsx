import React from 'react';
import CardOrder from '../component/CardOrder';
import '../styles/order.css';

const Order = () => (
  <div className="order">
    <h2>Meus pedidos</h2>
    <div className="orderContainer">
      <CardOrder order="0001" status="Pendente" />
      <CardOrder order="0003" status="Preparando" />
      <CardOrder order="0004" status="Entregue" />
      <CardOrder order="0005" status="Entregue" />
      <CardOrder order="0006" status="Entregue" />
      <CardOrder order="0007" status="Entregue" />
      <CardOrder order="0008" status="Entregue" />
      <CardOrder order="0009" status="Entregue" />
      <CardOrder order="0010" status="Entregue" />
      <CardOrder order="0021" status="Entregue" />
    </div>
  </div>
);

export default Order;
