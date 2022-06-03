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
          <h2 data-testid="customer_products__element-navbar-user-full-name">
            { user.name }
          </h2>
        </button>
        <div className="bar">
          <button
            data-testid="customer_products__element-navbar-link-products"
            type="button"
          >
            Produtos
          </button>
          <button
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
          >
            Meus pedidos
          </button>
          <button
            data-testid="customer_products__checkout-bottom-value"
            type="button"
            className="carrinho"
          >
            Ver Carrinho: R$: 34:99
          </button>
        </div>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          className="sair"
          onClick={ logout }
        >
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
