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
    const { product } = this.props;

    return (
      <div className="col-sm-4">
        <div className="card mb-3" key={product.id}>
          <img
            className="card-img-top"
            src={hover ? product.hoveredPicture : product.picture}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-primary">I krepseli</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductView;
