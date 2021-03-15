import "../App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allTodos,
  todosDone,
  todosNotDone,
  deleteTodo,
  addTodo,
  editTodo,
  saveTodo,
} from "../actions/actions";
import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todosReducer);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    status: "notDone",
  });
  let handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const [input, setInput] = useState("");

  useEffect(() => {
    if (todos.save) {
      setInput(todos.save.title);
    }
  }, [todos.save]);

  let add = () => {
    dispatch(addTodo(newTodo));
  };

  const addd = () => {
    if (input) {
      if (!todos.save) {
        dispatch(addTodo({ id: uuidv4(), title: input, status: "notDone" }));
        setInput("");
      } else {
        dispatch(editTodo({ ...todos.save, title: input }));
        setInput("");
      }
    }
  };
  return (
    <div style={{ padding: "3rem 2.25rem" }} className="todo-application">
      <MDBContainer
        style={{
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        <div
          className="btn-group"
          style={{ margin: "3rem auto", textAlign: "center" }}
        >
          <MDBBtn
            onClick={() => dispatch(allTodos())}
            style={{ marginRight: "1rem", width: "3rem" }}
          >
            <MDBIcon far icon="list-alt" />
          </MDBBtn>
          <MDBBtn
            onClick={() => dispatch(todosDone())}
            style={{ marginRight: "1rem" }}
          >
            <MDBIcon far icon="thumbs-up" />
          </MDBBtn>
          <MDBBtn
            onClick={() => dispatch(todosNotDone())}
            style={{ marginRight: "1rem" }}
          >
            <MDBIcon far icon="thumbs-down" />
          </MDBBtn>
          <MDBBtn onClick={toggle} style={{ marginRight: "1rem" }}>
            <MDBIcon icon="plus" />
          </MDBBtn>
          <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>New todo to add !</MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="title" name="title" onChange={handleChange} />
              <MDBInput
                label="description"
                name="description"
                onChange={handleChange}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" onClick={() => add()}>
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </MDBContainer>

      <MDBRow>
        {todos.filt
          ? todos.todos
              .filter((item) => item.status === todos.filt)
              .map((todo) => (
                <MDBCol
                  xl="3"
                  md="4"
                  sm="5"
                  xs="11"
                  style={{ padding: "1rem" }}
                  key={todo.id}
                >
                  <MDBCard
                    className="card-image"
                    style={{
                      backgroundImage:
                        "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                      margin: "0.75rem",
                      width: "100%",
                    }}
                  >
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                      <div>
                        <h5 className="pink-text">
                          <MDBIcon icon="chart-pie" /> One task
                        </h5>
                        <MDBCardTitle tag="h3" className="pt-2">
                          <strong>{todo.title}</strong>
                        </MDBCardTitle>
                        <p>{todo.description}</p>
                        <MDBCardTitle tag="h5" className="pt-1">
                          {todo.status}
                        </MDBCardTitle>
                        <MDBBtn
                          color="red"
                          onClick={() => {
                            dispatch(deleteTodo(todo.id));
                          }}
                        >
                          Delete
                        </MDBBtn>
                        <MDBBtn
                          color="pink"
                          onClick={() => {
                            dispatch(saveTodo(todo));
                            console.log(
                              "Todo saved : ",
                              todo,
                              "all the reducer data is: ",
                              todos
                            );
                          }}
                        >
                          Edit
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCard>
                </MDBCol>
              ))
          : todos.todos.map((todo) => (
              <MDBCol
                xl="3"
                md="4"
                sm="5"
                xs="11"
                style={{ padding: "1rem" }}
                key={todo.id}
              >
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                    margin: "0.75rem",
                    width: "100%",
                  }}
                >
                  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                    <div>
                      <h5 className="pink-text">
                        <MDBIcon icon="chart-pie" /> One task
                      </h5>
                      <MDBCardTitle tag="h3" className="pt-2">
                        <strong>{todo.title}</strong>
                      </MDBCardTitle>
                      <p>{todo.description}</p>
                      <MDBCardTitle tag="h5" className="pt-1">
                        {todo.status}
                      </MDBCardTitle>
                      <MDBBtn
                        color="red"
                        onClick={() => {
                          dispatch(deleteTodo(todo.id));
                        }}
                      >
                        Delete
                      </MDBBtn>
                      <MDBBtn
                        color="pink"
                        onClick={() => {
                          dispatch(saveTodo(todo));
                          console.log(
                            "Todo saved : ",
                            todo,
                            "all the reducer data is: ",
                            todos
                          );
                        }}
                      >
                        Edit
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            ))}
      </MDBRow>
      <div
        style={{
          border: "2px solid #aaa",
          padding: "1.5rem",
          margin: "0 auto",
          width: "90%",
          background: "rgba(0,0,0,.7)",
        }}
      >
        <h4 className="pink-text">Editing space !</h4>
        <MDBInput
          style={{ color: "#fff" }}
          value={input}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MDBBtn color="pink" onClick={() => addd()}>
          Add
        </MDBBtn>
      </div>
    </div>
  );
};

export default Todos;
