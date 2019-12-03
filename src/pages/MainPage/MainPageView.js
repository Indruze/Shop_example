import React from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Cart from '../../components/Cart';
import ChatWidget from '../../components/ChatWidget';
import data from '../../data/data';

class MainPageView extends React.Component<$State> {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  handleRemoveFromCart = (product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(cartItem => cartItem.id !== product.id);
      return { cartItems: cartItems };
    })
  }

  handleAddToCart = (product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cartItem => {
        if (cartItem.id === product.id) {
          cartItem.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      return { cartItems: cartItems };
    })
  }

  renderContent() {
    const { cartItems } = this.state;

    if (cartItems.length !== 0) {
      return (
        <React.Fragment>
          <div className="order-2 order-lg-1 col-lg-9">
            <div className="container">
              <div className="row">
                {data.map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={this.handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 order-lg-2 col-lg-3">
            <Cart
              cartItems={cartItems}
              removeFromCart={this.handleRemoveFromCart}
            />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {data.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={this.handleAddToCart}
          />
        ))}
      </React.Fragment>
    );
  }

  render() {

    return (
      <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          {this.renderContent()}
        </div>
        <ChatWidget />
      </div>
      </React.Fragment>
    )
  }
}

export default MainPageView;
