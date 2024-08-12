import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {AddTodos} from './MyComponents/AddTodos';
import {Todos} from './MyComponents/Todos';
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am Delete.", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    }

    const addTodo = (title,desc)=> {
      console.log("Adding a todo", title, desc)
      let sno;
      if(todos.length==0) {
        sno = 0;
      } else {
        sno = todos[todos.length-1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Need to go to the market",
      desc: "Go to the market"
    },
    {
      sno: 2,
      title: "Need to go to the bathroom",
      desc: "Go to the bathroom"
    },
    {
      sno: 3,
      title: "Need to go to the ground",
      desc: "Go to the ground"
    }
  ])

  return (
    <>
    <Header title="Hola Compadre" searchBar={false}/>
    <AddTodos addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
