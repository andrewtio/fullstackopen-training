import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   {
//     content: "state of store can contain any data",
//     important: false,
//     id: 2,
//   },
// ];

// const noteReducer = (state = initialState, action) => {
//   // if (action.type === "NEW_NOTE") {
//   // state.push(action.payload);
//   // return state;

//   //   return state.concat(action.payload);
//   // }
//   // return state;

//   switch (action.type) {
//     case "NEW_NOTE":
//       // return state.concat(action.payload);
//       return [...state, action.payload];
//     case "TOGGLE_IMPORTANCE": {
//       const id = action.payload.id;
//       const noteToChange = state.find((n) => n.id === id);
//       const changedNote = {
//         ...noteToChange,
//         important: !noteToChange.important,
//       };
//       return state.map((note) => (note.id !== id ? note : changedNote));
//     }
//     default:
//       return state;
//   }
// };

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      // const content = action.payload;

      // state.push({
      //   content,
      //   important: false,
      //   id: generateId(),
      // });
      const newNote = action.payload;
      state.push(newNote);
    },
    toggleImportanceOf(state, action) {
      const id = action.payload;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      console.log("ParsedState", JSON.parse(JSON.stringify(state)));
      console.log("state", state);
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     payload: {
//       content,
//       important: false,
//       id: generateId(),
//     },
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     payload: { id },
//   };
// };

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions;
export default noteSlice.reducer;

// export default noteReducer;
