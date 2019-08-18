import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Cart({ cart, removeFromCart, updateAmount, cartTotalPrice }) {
  function incrementAmount(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrementAmount(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementAmount(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => incrementAmount(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotalPrice}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{cartTotalPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
}

Cart.defaultProps = {
  cart: [],
  cartTotalPrice: 0,
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      priceFormatted: PropTypes.string,
      amount: PropTypes.number,
      subtotalPrice: PropTypes.number,
    })
  ),
  removeFromCart: PropTypes.func.isRequired,
  updateAmount: PropTypes.func.isRequired,
  cartTotalPrice: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => {
    return {
      ...product,
      subtotalPrice: formatPrice(product.price * product.amount),
    };
  }),
  cartTotalPrice: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
