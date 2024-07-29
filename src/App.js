import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
// import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
let initTodo;
if(localStorage.getItem("todos") === null){
  initTodo = [];
}else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}
  const onDelete = (todo)=>{
    console.log("delete" ,todo);
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }))

   localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno=todos[todos.length-1].sno+1;
    }
    const newTodo = {
      Sno :sno,
      title :title,
      desc : desc
    }

    setTodos([...todos,newTodo]);

  }


const [todos ,setTodos]= useState(initTodo);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

  return (
    <>
    <div className="App">
      <Header title="Todo List" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
    </>
    
  )
}

export default App;