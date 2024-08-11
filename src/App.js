import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import AddTodos from './MyComponents/AddTodos';
import {Todos} from './MyComponents/Todos';
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am Delete.", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
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
    <Header title="Hola Amigo" searchBar={false}/>
    <AddTodos/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
