import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecreams/iceCreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
