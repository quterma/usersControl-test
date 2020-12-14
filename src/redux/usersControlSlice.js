import { createSlice } from "@reduxjs/toolkit";
import date from "./../utils/date";
import uuid from "./../utils/uuid";

export const usersControlSlice = createSlice({
	name: "usersControl",
	initialState: {
		users: {
			"user-1": {
				login: "first@gmail.com",
				email: "first@gmail.com",
				password: "123456",
				phone: "79103225566",
				firstName: "Иван",
				secondName: "Иванович",
				lastName: "Иванов",
				status: "clients",
				created: "05.12.2020",
				updated: "10.12.2020",
			},
			"user-2": {
				login: "second@gmail.com",
				email: "second@gmail.com",
				password: "qwerty",
				phone: "79205575564",
				firstName: "John",
				secondName: "",
				lastName: "Smith",
				status: "partners",
				created: "01.12.2020",
				updated: "",
			},
			"user-3": {
				login: "third@gmail.com",
				email: "third@gmail.com",
				password: "123qwe",
				phone: "79008885522",
				firstName: "Дональд",
				secondName: "Джон",
				lastName: "Трамп",
				status: "admins",
				created: "01.12.2020",
				updated: "05.12.2020",
			},
		},

		filter: {
			status: null,
			search: null,
		},

		mainMode: {
			// usersList | userPage | userForm
			mode: "usersList",
			id: null,
		},
	},
	reducers: {
		createUser: state => {
			const id = uuid();
			const created = date();
			state.users[id] = {
				login: "",
				email: "",
				password: "",
				phone: "",
				firstName: "",
				secondName: "",
				lastName: "",
				status: "",
				created,
				updated: "",
			};
			state.mainMode = { mode: "userForm", id };
		},
		updateUser: (state, action) => {
			const id = state.mainMode.id;
			const updated = date();
			state.users[id] = { ...state.users[id], ...action.payload, updated };
			// state.mainMode = { usersList: false, userPage: true, userForm: false, id };
		},
		deleteUser: state => {
			const id = state.mainMode.id;
			delete state.users[id];
		},
		setFilter: (state, action) => {
			state.filter = { ...state.filter, ...action.payload };
		},

		setMainMode: (state, action) => {
			state.mainMode = { ...state.mainMode, ...action.payload };
		},
	},
});

export const { createUser, updateUser, deleteUser, setFilter, setMainMode } = usersControlSlice.actions;

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
export const selectFilter = state => state.usersControl.filter;
export const selectMainMode = state => state.usersControl.mainMode;

export default usersControlSlice.reducer;
