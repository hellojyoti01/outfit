import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.redux";

export const store =
	configureStore(
		{
			reducer:
				{
					cart: cartReducer,
				},
		}
	);

store.subscribe(
	() => {
		console.log(
			store.getState()
		);
	}
);
