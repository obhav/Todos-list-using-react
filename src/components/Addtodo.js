import React from 'react'
import { useState } from 'react'

export default function Addtodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }else{
          addTodo(title,desc);
          setTitle("");
          setDesc("");
        } 
    }
       
  return (
    <div className='container my-3' >
        <h3>Add Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
  </div>
  <center> <button type="submit" className="btn btn-primary">Submit</button></center>
</form>
    </div>
  )
}
