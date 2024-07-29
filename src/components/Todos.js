import React from 'react';
import Todo from '../components/Todo';

export default function Todos(props) {
  return (
    <div className='container'>
       <h3>Todos List</h3>
     
      {/* {props.todos.map((todo) => (
        return <Todo todo={todo} />
      ))} */}
        {/* <Todo todo={props.todos[0]}></Todo> */}

    {props.todos.length===0 ? (<center>No tasks to display.</center>) : 
      props.todos.map((todo)=>{
        return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      })

      }
    </div>
  );
}