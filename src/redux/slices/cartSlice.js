import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItems = action.payload;
      const existingItem = state.itemsList.find((item) => item.productId === newItems.productId);

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;

        existingItem.totalPrice += newItems.price;
      } else {
        state.itemsList.push({
          productId: newItems.productId,
          productName: newItems.productName,
          des: newItems.description,
          image: newItems.imageUrl,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price,
        });
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      const existingItem = state.itemsList.find((item) => item.productId === productId);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.productId !== productId);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    deleteItem: (state, action) => {
      const productId = action.payload;
      const existingItem = state.itemsList.find((item) => item.productId === productId);
      if (existingItem) {
        state.itemsList = state.itemsList.filter((item) => item.productId !== productId);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});
console.log(cartSlice);
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
