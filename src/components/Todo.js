import React from 'react';

export default function Todo ({ todo,onDelete }) {
  return (
    
        <>
        <div className='container'>
            <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-primary m-2' onClick={()=>{onDelete(todo)}}>Mark as complete</button>
    </div>
    <hr />
    </>
      
  );
}