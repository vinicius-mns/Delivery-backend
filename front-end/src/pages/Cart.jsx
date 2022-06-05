import React from 'react';
import SubCard from '../component/SubCard';

const Cart = () => (
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
      <SubCard id="1" name="Coca Cola lata 300ml" quantity="2" valueU="2.41" sub="12.2" />
      <SubCard id="1" name="Bhrama coisada" quantity="2" valueU="2.41" sub="12.2" />
      <SubCard id="2" name="Alcol Etanois" quantity="2" valueU="2.41" sub="12.2" />
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
        <span>24,53</span>
      </div>
      <button type="button">Finalizar Pedido</button>
    </div>
  </div>
);

export default Cart;
