import React, { useContext } from 'react';
import SubCard from '../component/SubCard';
import CustomerContext from '../context/CustomerContext';

const Cart = () => {
  const { totalPrice, cart } = useContext(CustomerContext);
  const items = cart.map((x) => ({ ...x, sub: (x.price * x.quantity).toFixed(2) }));

  return (
    <div className="cart">
      <h2>Finalizar pedido</h2>
      <div className="containerSubCard">
        <div className="subCard">
          <span className="a">Item</span>
          <span className="b">Descrição</span>
          <span className="c">Quantidade</span>
          <span className="d">Valor Unitario</span>
          <span className="e">Sub-Total</span>
          <span className="f">Remover Item</span>
        </div>
      </div>
      <div className="containerSubCard schroll">
        {items.map(({ id, name, price, quantity, sub }) => (
          <SubCard
            key={ id }
            id={ id }
            name={ name }
            quantity={ quantity }
            valueU={ price }
            sub={ sub }
          />
        ))}
      </div>
      <span className="details">Detalhes da Entrega</span>
      <div className="finishContainer">
        <div>
          <span>P. pessoas responsável</span>
          <input type="text" />
        </div>
        <div>
          <span>Endereço</span>
          <input type="text" placeholder="Rua Sao paulo, Bairro Rio" />
        </div>
        <div>
          <span>Número</span>
          <input type="number" placeholder="123" />
        </div>
      </div>
      <div className="finshB">
        <div className="totalPrice">
          <span>{'Total R$: '}</span>
          <span>{ totalPrice }</span>
        </div>
        <button type="button">Finalizar Pedido</button>
      </div>
    </div>
  );
};

export default Cart;
