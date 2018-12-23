import { utils } from "./utils";

export default {
  getters: {
    getProducts: state => {
      return state.products;
    },
    getCart: state => {
      return state.cart;
    },
    getSizes: state => {
      return state.sizes;
    },
    getQuantities: state => {
      return state.quantities;
    },
    getItemIndex: (state, params) => {
      return utils.getItemIndex(state, params);
    },
    getTotalPrice: state => {
      let total = 0;
      for (var prop in state.cart.items) {
        let fixedPrice = parseFloat(utils.parsePrice(state.cart.items[prop].totalprice));
        total += fixedPrice;
      }
      state.cart.total = total.toFixed(2).toString();
      return total.toFixed(2);
    }
  },
  setters: {
    setItemPrice: (state, data) => {
      for (var prop in state.cart.items) {
        if (state.cart.items[prop].item.id === data.itemRef) {
          state.cart.items[prop].totalprice = data.totalBudget
          state.cart.items[prop].quantity = data.pax
          break;
        }
      }
    },
    setItemQuantity: (state, params) => {
      state.cart.items[params.index].quantity = params.quantity;
    }
  }
};
