import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../apis/data';

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
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemId = action.payload;
      const itemWillAdd = state.productsData.find((item) => {
        if (item.id === itemId) {
          return (item.amount = 1);
        }
      });
      state.cart.push(itemWillAdd);
      state.itemsInCart.push(itemId);
      state.isShortCartOpen = true;
    },
    closeCartOverlay: (state) => {
      state.isShortCartOpen = false;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
      state.itemsInCart = state.itemsInCart.filter((id) => id !== itemId);
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    getCategories: (state) => {
      state.cateogries = [
        'الكل',
        ...new Set(state.productsData.map((item) => item.category)),
      ];
    },
    menuItemsInShop: (state, action) => {
      const newCat = action.payload;
      console.log(action);
      if (newCat === 'الكل') {
        state.menuItems = state.productsData;
      } else {
        state.menuItems = state.productsData.filter(
          (product) => product.category === newCat
        );
      }
      state.activeCategory = newCat;
    },
    updateCart: (state, action) => {
      const { id, valueAmount } = action.payload;
      if (state.itemsInCart.includes(id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: +valueAmount };
          }
          return item;
        });
      } else {
        const newItem = state.productsData.find((item) => {
          if (item.id === id) {
            return (item.amount = +valueAmount);
          }
        });
        state.cart.push(newItem);
      }
      !state.itemsInCart.includes(id) && state.itemsInCart.push(id);
      state.isShortCartOpen = true;
    },
    updateBigCart: (state, action) => {
      state.cart = action.payload;
      state.isShortCartOpen = true;
    },
  },
});
export const {
  addItemToCart,
  closeCartOverlay,
  removeItem,
  calculateTotals,
  getCategories,
  menuItemsInShop,
  updateCart,
  updateBigCart,
} = cartSlice.actions;
export default cartSlice.reducer;
