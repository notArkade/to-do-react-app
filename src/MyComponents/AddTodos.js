import React from "react";
import { useState } from "react";

export const AddTodos = ({addTodo}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
 
  const submit = (e)=> {
    e.preventDefault();
    if(!title || !desc) {
      alert("Title or description cannot be empty")
    }
    addTodo(title,desc);
  }

  return (
    <div className="container my-3">
        <h3 className="text-center">Add To-do</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Add a to-do
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="What do you need to do?"
            onChange={(e)=>setTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Add description
          </label>
          <input
            type="text"
            value={desc}
            className="form-control"
            id="desc"
            placeholder="Describe what you need to do."
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
