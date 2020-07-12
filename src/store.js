import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import fullScreenProgress, {
  circuralsProgress,
} from "./state/fullScreenProgress";

window.addCircural = () => store.dispatch(circuralsProgress.add());
window.removeCircural = () => store.dispatch(circuralsProgress.remove());

const reducers = combineReducers({ fullScreenProgress });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
