import { createSlice } from '@reduxjs/toolkit';

interface IProductsState {
	products: string[]
}
const initialState: IProductsState = {
	products: ['product1', 'product2', 'product3']
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.products.push(action.payload)
		},
		removeProduct(state, action) {
			state.products = state.products.filter(el => el !== action.payload)
		}
	}
})


export const { addProduct, removeProduct } = productsSlice.actions
export const { reducer: productsReducer } = productsSlice
