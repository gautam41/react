import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
const middleWare = [logger];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
