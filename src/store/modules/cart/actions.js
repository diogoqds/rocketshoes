export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product,
  };
}
