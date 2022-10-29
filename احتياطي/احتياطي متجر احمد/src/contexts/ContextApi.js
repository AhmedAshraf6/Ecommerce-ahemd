import React, { useContext, useReducer, useEffect } from 'react';
import { data } from '../apis/data';
import reducer from './reducer';
const AppContext = React.createContext();

const initialState = {
  productsData: data,
  menuItems: data,
  activeCategory: 'الكل',
  cateogries: [],
  cart: [],
  itemsInCart: [],
  isShortCartOpen: false,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (id) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: id });
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  const closeCartOverlay = () => {
    dispatch({ type: 'CLOSE_CART_OVERLAY' });
  };
  const MenuItemsInShop = (cat) => {
    dispatch({ type: 'MENU_ITEMS_IN_SHOP', payload: cat });
  };
  const updateCart = (id, amount) => {
    dispatch({ type: 'UPDATE', payload: { id, amount } });
  };

  const updateBigCart = (bigcart) => {
    dispatch({ type: 'UPDATE_BIG_CART', payload: bigcart });
  };
  // const clearCart = () => {
  //   dispatch({ type: 'CLEAR_CART' });
  // };

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        addItemToCart,
        remove,
        closeCartOverlay,
        MenuItemsInShop,
        updateCart,
        updateBigCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// instead of repeating useContext and appContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
