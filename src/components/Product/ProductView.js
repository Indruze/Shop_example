// @flow

import React from 'react';

type $Product = {
  id: number,
  name: string,
  price: number,
  picture: string,
  hoveredPicture: string,
};

type $Props = {
  product: $Product,
  addToCart: () => void;
}

type $State = {
  hover: boolean,
};

class ProductView extends React.Component<$Props, $State> {
  constructor(props: $Props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  render() {
    const { hover } = this.state;
    const { product, addToCart } = this.props;

    return (
      <div className="col-md-4">
        <div className="card mb-3">
          <img
            className="card-img-top"
            src={hover ? product.hoveredPicture : product.picture}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{`${product.price.toFixed(2)} €`}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>I krepseli</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductView;
