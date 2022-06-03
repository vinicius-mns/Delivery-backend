import React, { useState } from 'react';
import '../styles/card.css';

const img = 'https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png';

const Card = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);

  const decrement = () => { if (value !== 0) { setValue(value - 1); } };

  return (
    <div className="card">
      <img src={ img } alt="lata" />
      <div className="descricao">
        <span>Cocacola</span>
        <span>R$:4,99</span>
      </div>
      <div className="quantidade">
        <button type="button" onClick={ decrement }>-</button>
        <input className="number" type="string" value={ value } />
        <button type="button" onClick={ increment }>+</button>
      </div>
    </div>
  );
};
export default Card;
