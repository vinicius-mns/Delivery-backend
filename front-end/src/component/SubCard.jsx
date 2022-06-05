import PropTypes from 'prop-types';
import React from 'react';

const SubCard = ({ id, name, quantity, valueU, sub }) => (
  <div className="subCard grey">
    <span className="a">{id}</span>
    <span className="b">{name}</span>
    <span className="c">{quantity}</span>
    <span className="d">{valueU}</span>
    <span className="e">{sub}</span>
    <button className="f" type="button">Remover</button>
  </div>
);

SubCard.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  quantity: PropTypes.any,
  sub: PropTypes.any,
  valueU: PropTypes.any,
}.isRequired;

export default SubCard;
