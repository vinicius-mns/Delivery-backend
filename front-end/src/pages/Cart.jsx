import React, { useContext, useEffect, useState } from 'react';
import SubCard from '../component/SubCard';
import CustomerContext from '../context/CustomerContext';

const Cart = () => {
  const [nothing, setNothing] = useState(true);
  const { totalPrice, cart, setCart } = useContext(CustomerContext);
  const items = cart.map((x) => ({ ...x, sub: (x.price * x.quantity).toFixed(2) }));

  useEffect(() => {
    if (items.length > 0) setNothing(false);
  }, [items.length]);

  const removeItem = (id) => {
    const newCart = cart.filter((x) => x.id !== id);

    if (newCart.length === 0) setNothing(true);

    setCart(newCart);
  };

  const finish = () => {
    setToken(JSON.parse(localStorage.getItem('user')).token);

    requestPost('/salles', {
      cart,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      sellerId: 2,
    });

    setCart([]);
  };

  return (
    <div className="cart">
      {nothing && <div className="nothing"><h1>Carrinho Vazio</h1></div>}
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
        {items.map(({ id, name, price, quantity, sub }, index) => (
          <SubCard
            key={ id }
            id={ index }
            name={ name }
            quantity={ quantity }
            valueU={ price.toString().replace('.', ',') }
            sub={ sub.toString().replace('.', ',') }
            remove={ () => removeItem(id) }
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
          <span>{ totalPrice.toString().replace('.', ',') }</span>
        </div>
        <button
          onClick={ finish }
          disabled={ disabled }
          type="submit"
          data-testid={ `${prefix}button-submit-order` }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Cart;
