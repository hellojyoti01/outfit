import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	data: [],
	amount: 0,
};

const addToCart = createAsyncThunk(
	"carts/addToCart",
	async (parameter, store) => {
		console.log(parameter, "ProductSlice");
		const { id } = parameter || {};
		const responce = await axios.post(`/cart/${id}`, {});

		return responce.data.payload;
	}
);

//console.log(addToCart, "AddToCart")

export const counterSlice = createSlice({
	name: "carts",
	initialState,

	extraReducers: (builder) => {
		builder.addCase(addToCart.fulfilled, (state, action) => {
			state.data = action.payload;
		});
		builder.addCase(addToCart.rejected, (state, action) => {});
		builder.addCase(addToCart.pending, (state, action) => {});
	},
});

// Action creators are generated for each case reducer function
export const { addProduct, decrement, incrementByAmount } =
	counterSlice.actions;
export { addToCart };

export default counterSlice.reducer;
