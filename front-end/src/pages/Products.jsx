import React, { useEffect, useState } from 'react';
import Card from '../component/card';
import '../styles/bar.css';
import logo from '../images/logo.png';
import { requestGet } from '../service/request';
import Bar from '../component/Bar';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProduts = async () => {
      const allProducts = await requestGet('/products');
      setProductList(allProducts);
    };

    getProduts();
  }, []);

  return (
    <div className="products">
      <img src={ logo } alt="logo" className="backgroundImage" />
      <Bar />
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
