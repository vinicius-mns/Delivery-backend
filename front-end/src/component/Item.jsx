import React from 'react';

const Item = ({ title, testId, type, handlechand }) => {
  return (
    <div className="item">
      <h2>{title}</h2>
      <input
        type={ type }
        data-testid={ testId }
        onChange={ handlechand }
      />
    </div>
  );
};

export default Item;
