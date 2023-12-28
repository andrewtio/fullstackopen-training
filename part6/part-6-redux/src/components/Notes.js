// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

const Notes = (props) => {
  // const dispatch = useDispatch();
  // const notes = useSelector((state) => state.notes);
  // const notes = useSelector(({ filter, notes }) => {
  //   if (filter === "ALL") {
  //     return notes;
  //   }
  //   return filter === "IMPORTANT"
  //     ? notes.filter((note) => note.important)
  //     : notes.filter((note) => !note.important);
  // });

  // const notesToShow = () => {
  //   if (props.filter === "ALL") {
  //     return props.notes;
  //   }

  //   return props.filter === "IMPORTANT"
  //     ? props.notes.filter((note) => note.important)
  //     : props.notes.filter((note) => !note.important);
  // };
  console.log(props, "notesProps");

  return (
    <ul>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "state");
  if (state.filter === "ALL") {
    return {
      notes: state.notes,
    };
  }
  return {
    notes:
      state.filter === "IMPORTANT"
        ? state.notes.filter((note) => note.important)
        : state.notes.filter((note) => !note.important),
  };
};

const mapDispatchToProps = {
  toggleImportanceOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
