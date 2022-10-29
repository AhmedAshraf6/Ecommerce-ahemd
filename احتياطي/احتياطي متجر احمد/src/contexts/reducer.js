const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM_TO_CART') {
    const itemWillAdd = state.productsData.find(
      (product) => product.id === action.payload
    );
    return {
      ...state,
      cart: [...state.cart, { ...itemWillAdd, amount: 1 }],
      itemsInCart: [...state.itemsInCart, action.payload],
      isShortCartOpen: true,
    };
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      itemsInCart: state.itemsInCart.filter(
        (cartItem) => cartItem !== action.payload
      ),
    };
  }
  if (action.type === 'CLOSE_CART_OVERLAY') {
    return {
      ...state,
      isShortCartOpen: false,
    };
  }
  // if (action.type === 'CLEAR_CART') {
  //   return { ...state, cart: [] };
  // }
  if (action.type === 'GET_TOTALS') {
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
  }
  if (action.type === 'GET_CATEGORIES') {
    return {
      ...state,
      cateogries: [
        'الكل',
        ...new Set(state.productsData.map((item) => item.category)),
      ],
    };
  }
  if (action.type === 'MENU_ITEMS_IN_SHOP') {
    if (action.payload === 'الكل') {
      return {
        ...state,
        menuItems: state.productsData,
        activeCategory: 'الكل',
      };
    }
    return {
      ...state,
      menuItems: state.productsData.filter(
        (product) => product.category === action.payload
      ),
      activeCategory: action.payload,
    };
  }
  if (action.type === 'UPDATE') {
    // check item in itemsInCart if found we make upadte if not we make Add
    if (state.itemsInCart.includes(action.payload.id)) {
      let newCart;
      if (action.payload.amount == 0) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.id !== action.payload.id
          ),
          itemsInCart: state.itemsInCart.filter(
            (id) => id !== action.payload.id
          ),
          isShortCartOpen: true,
        };
      } else {
        newCart = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, amount: +action.payload.amount };
          }
          return product;
        });
        return {
          ...state,
          cart: newCart,
          isShortCartOpen: true,
        };
      }
    } else {
      const itemWillAdd = state.productsData.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...itemWillAdd, amount: +action.payload.amount },
        ],
        itemsInCart: [...state.itemsInCart, action.payload.id],
        isShortCartOpen: true,
      };
    }
  }

  if (action.type === 'UPDATE_BIG_CART') {
    return { ...state, cart: action.payload };
  }

  // throw new Error('no matching action type');
  return state;
};

export default reducer;
