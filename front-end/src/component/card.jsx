import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/card.css';

const Card = ({ img, name, price, id }) => {
  const [quantity, setValue] = useState(0);
  const prefixTag = 'customer_products__';

  const increment = () => setValue(quantity + 1);
  const decrement = () => { if (quantity !== 0) { setValue(quantity - 1); } };

  const handleValue = ({ target: { value } }) => {
    const max = 99;
    if (!Number.isNaN(Number(value))) setValue(Number(value));
    if (Number(value) >= max) setValue(max);
  };

  return (
    <div className="card">
      <img
        src={ img }
        alt="lata"
        data-testid={ `${prefixTag}img-card-bg-image-${id}` }
      />
      <div className="descricao">
        <span
          data-testid={ `${prefixTag}element-card-title-${id}` }
        >
          { name }
        </span>
        <div className="price">
          <span>{'R$: '}</span>
          <span data-testid={ `${prefixTag}element-card-price-${id}` }>
            {`${price.toString().replace('.', ',')}`}
          </span>
        </div>
      </div>
      <div className="quantidade">
        <button
          type="button"
          onClick={ decrement }
          data-testid={ `${prefixTag}button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          className="number"
          type="string"
          value={ quantity }
          onChange={ handleValue }
          min={ 0 }
          data-testid={ `${prefixTag}input-card-quantity-${id}` }
        />
        <button
          type="button"
          onClick={ increment }
          data-testid={ `${prefixTag}button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default Card;
