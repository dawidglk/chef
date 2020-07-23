import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import fullScreenProgress from "./state/fullScreenProgress";
import snackbars from "./state/snackbars";
import drawer from "./state/drawer";

// window.addCircural = () => store.dispatch(circuralsProgress.add());
// window.removeCircural = () => store.dispatch(circuralsProgress.remove());
// window.addSnack = (text, color) => store.dispatch(addSnackbar(text, color));

const reducers = combineReducers({ fullScreenProgress, snackbars, drawer });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
