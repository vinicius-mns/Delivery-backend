import PropTypes from 'prop-types';
import React from 'react';

const CardOrder = ({ order, status }) => (
  <button type="button" className="cardOrder grey">
    <div>
      <span>Pedido</span>
      <span>{order}</span>
    </div>
    <div className={ `${status} status` }>
      <h2>{status}</h2>
    </div>
    <div>
      <span>03/06/22</span>
      <span>R$: 29,55</span>
    </div>
  </button>
);

CardOrder.propTypes = {
  order: PropTypes.any,
  status: PropTypes.any,
}.isRequired;

export default CardOrder;
