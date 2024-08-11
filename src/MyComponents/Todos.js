import React from "react";
import TodoList from "./TodoList";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-5">Todos list</h3>
      {props.todos.length===0? <p className="p-2 text-center fs-5 bg-danger text-danger-emphasis border border-danger rounded-3">No todos to display yet</p>:
      props.todos.map((todo)=>{
        return <TodoList todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}

export default Todos;
