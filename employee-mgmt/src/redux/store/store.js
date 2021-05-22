import { createStore, applyMiddleware, compose  } from "redux";
import  rootReducer  from "../rootreducer/rootreducer";
import thunk from 'redux-thunk';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(
    rootReducer,
    enhancer
);

export default store;