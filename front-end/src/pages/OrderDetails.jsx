import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestGet, setToken } from '../service/request';

const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('user')).token);
    const getOrder = async () => {
      const data = await requestGet(`/sales/${id}`);
      setOrder(data);
    };

    getOrder();
  }, [id]);

  console.log(order);
  return (
    <div>
      <h2>{id}</h2>
      <p>Oi</p>
    </div>
  );
};

export default OrderDetails;
