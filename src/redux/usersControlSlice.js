import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import date from "./../utils/date";

export const usersControlSlice = createSlice({
	name: "usersControl",
	initialState: {
		users: {
			"first@gmail.com": {
				id: "first",
				email: "first@gmail.com",
				password: "123456",
				phone: "79103225566",
				firstName: "Иван",
				secondName: "Иванович",
				lastName: "Иванов",
				status: "client",
				created: "05.12.2020",
				updated: "10.12.2020",
			},
			"second@gmail.com": {
				id: "second",
				email: "second@gmail.com",
				password: "qwerty",
				phone: "79205575564",
				firstName: "John",
				secondName: "",
				lastName: "Smith",
				status: "partner",
				created: "01.12.2020",
				updated: "",
			},
			"third@gmail.com": {
				id: "third",
				email: "third@gmail.com",
				password: "123qwe",
				phone: "79008885522",
				firstName: "Дональд",
				secondName: "Джон",
				lastName: "Трамп",
				status: "admin",
				created: "01.12.2020",
				updated: "05.12.2020",
			},
		},
	},
	reducers: {
		createUser: (state, action) => {
			const { login, email, password, phone, firstName, secondName, lastName, status } = action.payload;
			const id = uuidv4();
			const created = date();
			state.users[login] = { id, email, password, phone, firstName, secondName, lastName, status, created };
		},
		updateUser: (state, action) => {
			const { login } = action.payload;
			const updated = date();
			state.users[login] = { ...state.users[login], ...action.payload, updated };
		},
		deleteUser: (state, action) => {
			const { login } = action.payload;
			delete state.users[login];
		},
	},
});

export const { createUser, updateUser, deleteUser } = usersControlSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectUsers = state => state.usersControl.users;

export default usersControlSlice.reducer;
