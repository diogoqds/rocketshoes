import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      const { id, amount } = action.payload;
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        }
      });
    }
    default:
      return state;
  }
}
