import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { ListTodo } from './components/ListTodo';
import NewInput from './components/NewInput';
import { TodoModal } from './components/TodoModal';

const App:React.FC = () => { 
  const [todo,setTodo] =  useState<string>("");
  const [todoList,setTodoList] =  useState<TodoModal[]>([]);
  
  const handleSubmit = useCallback( (e:React.SyntheticEvent) => {
    e.preventDefault();
    if(todo) {
      setTodoList([...todoList,{id:Date.now(),name:todo,isCompleted:false}])
    }
    setTodo("");
  },[todo]);


  return (
    <div className="App">
      <span className="heading">My Todo App</span>
      <NewInput todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <ListTodo todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
