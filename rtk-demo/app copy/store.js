const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecreams/iceCreamSlice");
const userReducer = require("../features/user/userSlice");

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
