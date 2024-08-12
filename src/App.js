// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";
import { AddTodos } from "./MyComponents/AddTodos";
import { Todos } from "./MyComponents/Todos";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am Delete.", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding a todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Hola Compadre" searchBar={false} />

        <Routes>
          
          <Route
            exact path="/"
            element={
                <>
                  <AddTodos addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </> 
            }
          />
          
          <Route exact path="/about" element={<About />}/>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
