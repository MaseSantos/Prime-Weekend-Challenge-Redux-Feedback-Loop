import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const feelingResponse = (state = [], action) => {
    if (action.type === "ADD_FEELING_RESPONSE") {
        console.log("Info:", state, action.type, action.payload);
        return action.payload;
    }
    return state;
};

const understandingResponse = (state = [], action) => {
  if (action.type === "ADD_UNDERSTANDING_RESPONSE") {
    console.log("Info:", state, action.type, action.payload);
    return action.payload;
  }
  return state;
};

const supportResponse = (state = [], action) => {
  if (action.type === "ADD_SUPPORT_RESPONSE") {
    console.log("Info:", state, action.type, action.payload);
    return action.payload;
  }
  return state;
};

const commentsResponse = (state = [], action) => {
  if (action.type === "ADD_COMMENTS_RESPONSE") {
    console.log("Info:", state, action.type, action.payload);
    return action.payload;
  }
  return state;
};

// const responseList = (state = [], action) => {
//   if (action.type === "SET_ALL_RESPONSES") {
//     return action.payload;
//   }
//   return state;
// };

const storeInstance = createStore(
  combineReducers({
    feelingResponse,
    understandingResponse,
    supportResponse,
    // responseList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}><App /></Provider>,document.getElementById("root")
);
