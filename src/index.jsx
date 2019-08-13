import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_PHOTO": {
      return {
        ...state,
        currentView: "SinglePhoto",
        selectedPhoto: state.photos[action.index]
      };
    }
    case "SET_STATES": {   
      return {
        ...state,
        ...action.object
      };
    }
    case "GO_HOME": {
      return {
        ...state,
        currentView:
          state.currentView === "SinglePhoto" ? "AllPhotos" : "SinglePhoto"
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, {
  pokedex: [],
  searchBox: [],
  shownYours: {}
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
