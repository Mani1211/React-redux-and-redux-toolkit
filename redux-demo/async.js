const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const reduxLogger = require("redux-logger");
const axios = require("axios");
const logger = reduxLogger.createLogger();

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
	loading: false,
	users: [],
	error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequested = () => {
	return {
		type: FETCH_USERS_REQUESTED,
	};
};

const fetchUsersSucceeded = (users) => {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users,
	};
};

const fetchUsersFailed = (error) => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				error: "",
				users: action.payload,
			};
		case FETCH_USERS_FAILED:
			return {
				users: [],
				loading: false,
				error: action.payload,
			};

		default:
			break;
	}
};

const fetchUsers = () => {
	return async function (dispatch) {
		dispatch(fetchUsersRequested());
		await axios
			.get("https://jsonplaceholder.typicode.com/usersd")
			.then((res) => {
				const users = res.data.map((user) => user.id);
				dispatch(fetchUsersSucceeded(users));
			})
			.catch((err) => {
				console.log("err.message", err.message);
				dispatch(fetchUsersFailed(err.message));
			});
	};
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchUsers());
