import { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch,
} from "react-router-dom";
import {
  Table,
  Form,
  // Button,
  // Alert,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  Container,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  Alert,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import styled from "styled-components";

const StyledButton = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`;

const Input = styled.input`
  margin: 0.25em;
`;

const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`;

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`;

const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`;

const Home = () => (
  <div>
    <h2> TKTL notes app</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
);

const Note = ({ note }) => {
  // const id = useParams().id;
  // const note = notes.find((n) => n.id === Number(id));
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : ""}</strong>
      </div>
    </div>
  );
};

const Notes = ({ notes }) => (
  <div>
    <h2>Notes</h2>
    {/* <Table striped>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </td>
            <td>{note.user}</td>
          </tr>
        ))}
      </tbody>
    </Table> */}

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </TableCell>
              <TableCell>{note.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

const Users = () => (
  <div>
    <h2>TKTL notes app</h2>
    <li>Matti Lukkainen</li>
    <li>Juha Tauriainen</li>
    <li>Arto Hellas</li>
  </div>
);

const Login = (props) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin("mluukai");
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      {/* <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form> */}

      {/* Bootstrap */}
      {/* <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form> */}

      <form onSubmit={onSubmit}>
        <div>
          {/* <TextField label="username" type="password"/> */}
          username: <Input />
        </div>
        <div>
          {/* <TextField label="password" type="password" /> */}
          password: <Input type="password" />
        </div>
        <div>
          {/* <Button variant="contained" color="primary" type="submit"> */}
          <StyledButton type="submit" primary="">
            login
          </StyledButton>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  // const [page, setPage] = useState("home");

  // const toPage = (page) => (event) => {
  //   event.preventDefault();
  //   setPage(page);
  // };

  // const content = () => {
  //   if (page === "home") {
  //     return <Home />;
  //   } else if (page === "notes") {
  //     return <Notes />;
  //   } else if (page === "users") {
  //     return <Users />;
  //   }
  // };

  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
      user: "Matti Luukkainen",
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
      user: "Matti Luukkainen",
    },
    {
      id: 3,
      content: "Most important methods of HTTP-protocol are GET and POST",
      important: true,
      user: "Arto Hellas",
    },
  ]);

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const login = (user) => {
    setUser(user);
    setMessage(`welcome ${user}`);
    setTimeout(() => {
      setMessage(null);
    }, 10000);
  };

  const padding = {
    padding: 5,
  };

  const match = useMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;

  return (
    // <div>
    //   <div>
    //     <a href="" onClick={toPage("home")} style={padding}>
    //       home
    //     </a>
    //     <a href="" onClick={toPage("notes")} style={padding}>
    //       notes
    //     </a>
    //     <a href="" onClick={toPage("users")} style={padding}>
    //       users
    //     </a>
    //   </div>

    //   {content()}
    // </div>
    // <div className="container">
    <Container>
      {message && (
        <Alert
          // variant="success"
          severity="success"
        >
          {message}
        </Alert>
      )}
      {/* <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div> */}

      {/* Bootstrap */}
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">
                home
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/notes">
                notes
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">
                users
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user ? (
                <em style={padding}>{user} logged in</em>
              ) : (
                <Link style={padding} to="/login">
                  login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <AppBar position="static"> */}
      <Page>
        <Navigation>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton> */}
          <Button color="inherit" component={Link} to="/">
            {/* <Link to="/">home</Link> */}
            home
          </Button>
          <Button color="inherit" component={Link} to="/notes">
            {/* <Link to="/notes">notes</Link> */}
            notes
          </Button>
          <Button color="inherit" component={Link} to="/users">
            {/* <Link to="/users">users</Link> */}
            users
          </Button>
          {/* <Button color="inherit"> */}
          {user ? (
            <em>{user} logged in</em>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
          {/* </Button> */}
        </Navigation>
        {/* </AppBar> */}
      </Page>
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer>
        <br />
        <em>Note app, Departement of Computer Science 2023</em>
      </Footer>
    </Container>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
