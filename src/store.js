import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import fullScreenProgress, {
  circuralsProgress,
} from "./state/fullScreenProgress";

import snackbars, { addSnackbar } from "./state/snackbars";

window.addCircural = () => store.dispatch(circuralsProgress.add());
window.removeCircural = () => store.dispatch(circuralsProgress.remove());
window.addSnack = (text, color) => store.dispatch(addSnackbar(text, color));

const reducers = combineReducers({ fullScreenProgress, snackbars });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
