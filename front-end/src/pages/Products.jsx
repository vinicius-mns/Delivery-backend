import React, { useEffect, useState } from 'react';
import Card from '../component/card';
import '../styles/bar.css';
import logo from '../images/logo.png';
import { requestGet } from '../service/request';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProduts = async () => {
      const allProducts = await requestGet('/products');
      setProductList(allProducts);
    };

    getProduts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="products">
      <img src={ logo } alt="logo" className="backgroundImage" />
      <div className="segredo">
        <button type="button" className="name">
          <h2>Vinicius Marcelino Silva</h2>
        </button>
        <div className="bar">
          <button type="button">Produtos</button>
          <button type="button">Meus pedidos</button>
          <button type="button" className="carrinho">
            Ver Carrinho: R$: 34:99
          </button>
        </div>
        <button type="button" className="sair">
          Sair
        </button>
      </div>
      <div className="container2">
        {
          productList.length > 0 && productList.map(({ urlImage, id, name, price }) => (
            <Card
              id={ id }
              name={ name }
              key={ id }
              price={ price }
              img={ urlImage }
            />
          ))
        }
      </div>
      <div className="showLogo" />
    </div>
  );
};

export default Products;
