import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/card.css';

// const img = 'https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png';

const Card = ({ img, name, price, id }) => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);

  const decrement = () => { if (value !== 0) { setValue(value - 1); } };

  const prefixTag = 'customer_products__';

  const sufixTag = id;

  const handleQuantityValue = ({ target }) => {
    if (Number(target.value) < 0 || Number.isNaN(target.value)) setValue(0);
    setValue(Number(target.value));
  };

  return (
    <div className="card">
      <img
        src={ img }
        alt="lata"
        data-testid={ `${prefixTag}img-card-bg-image-${sufixTag}` }
      />
      <div className="descricao">
        <span
          data-testid={ `${prefixTag}element-card-title-${sufixTag}` }
        >
          { name }
        </span>
        <span data-testid={ `${prefixTag}element-card-price-${sufixTag}` }>
          {`${price.toString().replace('.', ',')}`}
        </span>
      </div>
      <div className="quantidade">
        <button
          type="button"
          onClick={ decrement }
          data-testid={ `${prefixTag}button-card-rm-item-${sufixTag}` }
        >
          -
        </button>
        <input
          className="number"
          type="string"
          value={ value }
          onChange={ handleQuantityValue }
          min={ 0 }
          data-testid={ `${prefixTag}input-card-quantity-${sufixTag}` }
        />
        <button
          type="button"
          onClick={ increment }
          data-testid={ `${prefixTag}button-card-add-item-${sufixTag}` }
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
