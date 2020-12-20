import { HYDRATE, createWrapper } from "next-redux-wrapper";
import Router from "next/router";
import { loadingBarReducer } from "react-redux-loading-bar";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	createRouterMiddleware,
	initialRouterState,
	routerReducer,
} from "connected-next-router";
import posts from "./post";
import menu from "./menu";
import preferences from "./preferencesReducer";
import search from "./search";
import notifications from "./notifications";
import categories from "./categories";

export default () =>
	combineReducers({
		posts,
		menu,
		categories,
		preferences,
		router: routerReducer,
		loadingBar: loadingBarReducer,
		search,
		notifications,
	});

const rootReducer = combineReducers({
	posts,
	menu,
	categories,
	preferences,
	loadingBar: loadingBarReducer,
	search,
	notifications,
	router: routerReducer,
});

// const routerMiddleware = createRouterMiddleware();

// Using next-redux-wrapper's initStore
const reducer = (state: any, action: any) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		if (typeof window !== "undefined" && state?.router) {
			// preserve router value on client side navigation
			nextState.router = state.router;
		}
		return nextState;
	} else {
		return rootReducer(state, action);
	}
};

const devTools = process.env.NODE_ENV === "development";

export const initStore = (context: any) => {
	const routerMiddleware = createRouterMiddleware();
	const { asPath } = context.ctx || Router.router || {};
	let initialState;
	if (asPath) {
		initialState = {
			router: initialRouterState(asPath),
		};
	}
	return createStore(
		reducer,
		initialState,
		devTools
			? composeWithDevTools(applyMiddleware(routerMiddleware))
			: applyMiddleware(routerMiddleware)
	);
};

export const wrapper = createWrapper(initStore);
