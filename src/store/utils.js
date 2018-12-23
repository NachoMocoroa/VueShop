export const utils = {
  parsePrice: param => {
    const coinSimbol = '$';
    let replacePrice = param.replace(coinSimbol, ''),
      parsedPrice = parseFloat(replacePrice),
      fixedPrice = parsedPrice.toFixed(2);
    return fixedPrice;
  },
  totalPrice: state => {
    let total = 0;
    for (var prop in state.cart.items) {
      let fixedPrice = parseFloat(utils.parsePrice(state.cart.items[prop].totalprice));
      total += fixedPrice;
    }
    return total.toFixed(2);
  },
  getItemIndex: (state, params) => {
    let index = 0;
    for (var prop in state.cart.items) {
      if (state.cart.items[prop].item.id === params.itemid) {
        return index;
      }
      index++;
    }
    return -1;
  },
  getItemDuplicated: (state, params) => {
    let index = utils.getItemIndex(state, params);
    if (index !== -1 && state.cart.items[index].size === params.itemsize) {
      return index;
    } else {
      return -1;
    }
  }
};
