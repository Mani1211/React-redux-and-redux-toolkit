const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const creatStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake(qty = 1) {
	return {
		type: CAKE_ORDERED,
		payload: qty,
	};
}

function restockCake(qty = 1) {
	return {
		type: CAKE_RESTOCK,
		payload: qty,
	};
}

function orderIceCream(qty = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: qty,
	};
}

function restockIceCream(qty = 1) {
	return {
		type: ICECREAM_RESTOCK,
		payload: qty,
	};
}

// const initialState = {
// 	numOfCakes: 10,
// 	numOfIceCreams: 20,
// };
const initialIceCreamState = {
	numOfIceCreams: 20,
};

const initialCakeState = {
	numOfCakes: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload,
			};
		case CAKE_RESTOCK:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - action.payload,
			};
		case ICECREAM_RESTOCK:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = creatStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(orderCake(1));
store.dispatch(restockCake(3));
store.dispatch(orderIceCream(1));
store.dispatch(orderIceCream(1));
store.dispatch(restockIceCream(3));

unsubscribe();
