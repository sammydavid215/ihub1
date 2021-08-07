import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Card/ItemsInCart'
export default configureStore({
  reducer: {
      ItemsInCart: CartReducer,
  }
})