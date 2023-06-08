import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
// import noteReducer, {
//   createNote,
//   toggleImportanceOf,
//   setNotes,
// } from "./reducers/noteReducer";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
// import { createNote } from "./reducers/noteReducer";
// import { filterChange } from "./reducers/filterReducer";
// import noteService from "./services/notes";

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

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

// noteService.getAll().then((notes) =>
//   notes.forEach((note) => {
//     store.dispatch(setNotes(note));
//   })
// );

// const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));
// store.dispatch(filterChange("ALL"));
// store.dispatch(
//   createNote("combineReducers forms one reducer from many simple reducers")
// );
// store.dispatch(toggleImportanceOf(2));

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1,
//   },
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

// store.dispatch({
//   type: "TOGGLE_IMPORTANCE",
//   payload: {
//     id: 2,
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// const renderApp = () => {
//   root.render(<App />);
// };

// renderApp();
// store.subscribe(() => {
//   const storeNow = store.getState();
//   console.log(storeNow);
//   renderApp();
// });
