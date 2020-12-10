import { configureStore } from "@reduxjs/toolkit";
import usersControlReducer from "./usersControlSlice";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./../utils/localStorage";

// get state from localStorage
const persistedState = loadState();

export const store = configureStore({
	reducer: {
		usersControl: usersControlReducer,
		preloadedState: persistedState,
	},
});

// subscribes for setting state into localStorage
store.subscribe(
	throttle(() => {
		saveState(store.getState());
	}),
	1000
);
