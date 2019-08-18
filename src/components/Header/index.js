import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header(props) {
  const { cartCount } = props;
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartCount} items</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartCount: state.cart.length,
});

Header.defaultProps = {
  cartCount: 0,
};

Header.propTypes = {
  cartCount: PropTypes.number,
};
export default connect(mapStateToProps)(Header);
