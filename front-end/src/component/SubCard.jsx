import PropTypes from 'prop-types';
import React from 'react';

const SubCard = ({ id, name, quantity, valueU, sub, remove }) => {
  const prefix = 'customer_checkout__element-order-table-';

  return (
    <div className="subCard grey">
      <span className="a" data-testid={ `${prefix}item-number-${id}` }>{id + 1}</span>
      <span className="b" data-testid={ `${prefix}name-${id}` }>{name}</span>
      <span className="c" data-testid={ `${prefix}quantity-${id}` }>{quantity}</span>
      <span className="d" data-testid={ `${prefix}unit-price-${id}` }>{valueU}</span>
      <span className="e" data-testid={ `${prefix}sub-total-${id}` }>{sub}</span>
      <button
        onClick={ remove }
        className="f"
        type="button"
        data-testid={ `${prefix}remove-${id}` }
      >
        Remover
      </button>
    </div>
  );
};

SubCard.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  quantity: PropTypes.any,
  sub: PropTypes.any,
  valueU: PropTypes.any,
  remove: PropTypes.any,
}.isRequired;

export default SubCard;
