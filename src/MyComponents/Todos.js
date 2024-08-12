import React from "react";
import TodoList from "./TodoList";

export const Todos = (props) => {
  let todoStyle = {
    minHeight: "70vh"
  }
  return (
    <div className="container my-5" style={todoStyle}>
      <h3 className="text-center my-5">To-do's list</h3>
      {props.todos.length===0? <p className="p-2 text-center fs-5 bg-danger text-danger-emphasis border border-danger rounded-3">No to-do's to display yet</p>:
      props.todos.map((todo)=>{
        return (
        <TodoList todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })
      }
    </div>
  )
}

export default Todos;
