import React from 'react';
import Product from '../../components/Product';
import data from '../../data/data';

const MainPageView = () => {

  return (
    <div className="container">
      <div className="row">
        {data.map(product => (
          <Product
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default MainPageView;
