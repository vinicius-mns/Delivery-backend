import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ title, testId, type, handleChange }) => (
  <div className="item">
    <h2>{title}</h2>
    <input type={ type } data-testid={ testId } onChange={ handleChange } />
  </div>
);

Item.propTypes = {
  handleChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Item;
