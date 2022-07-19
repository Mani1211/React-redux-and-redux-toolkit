const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecreams/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log("update", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));

// unsubscribe();
