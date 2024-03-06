export default function reducer(state, action) {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "remove":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "increase": {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    }
    case "decrease": {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };
    }

   /* case "GET_TOTALS": {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }*/
    case "Add_item": {
      let index = 0;
      state.cart.map((item) => {
        if (action.payload.id === item.id) {
          index++;
        }
      });

      if (index <= 0) {
        let newCart = state.cart.push(action.payload);
        return { ...state, cart: newCart };
      } else {
        let tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount++ };
          }
          return item;
        });
        return { ...state, cart: tempCart };
      }
      break;
    }
  }
}
