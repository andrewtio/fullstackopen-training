import React from "react";
import ReactDOM from "react-dom/client";
import noteReducer from "./reducers/noteReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

// const counterReducer = (state = 0, action) => {
// if (action.type === "INCREMENT") {
//   return state + 1;
// } else if (action.type === "DECREMENT") {
//   return state - 1;
// } else if (action.type === "ZERO") {
//   return 0;
// }

//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "ZERO":
//       return 0;
//     default:
//       return state;
//   }
// };

// store.subscribe(() => {
//   const storeNow = store.getState();
//   console.log(storeNow);
// });

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "ZERO" });
// store.dispatch({ type: "DECREMENT" });

// const App = () => {
//   return (
//     <div>
//       <div>{store.getState()}</div>
//       <button onClick={(e) => store.dispatch({ type: "INCREMENT" })}>
//         plus
//       </button>
//       <button onClick={(e) => store.dispatch({ type: "DECREMENT" })}>
//         minus
//       </button>
//       <button onClick={(e) => store.dispatch({ type: "ZERO" })}>zero</button>
//     </div>
//   );
// };

const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
});

store.dispatch({
  type: "TOGGLE_IMPORTANCE",
  payload: {
    id: 2,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
  renderApp();
});
