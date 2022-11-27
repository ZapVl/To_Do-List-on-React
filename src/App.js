import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { useState } from 'react';
import {Container} from 'react-bootstrap';

import TodoAdd from './component/TodoAdd/TodoAdd';
import TodoList from './component/TodoList/TodoList';

function App() {
   const [todo, setTodo] = useState([
      {
         id: 1,
         title: "Why it's works?",
         status: false,
      },
      {
         id: 2,
         title: "Just do see in this them tutorial",
         status: false,
      },
      {
         id: 3,
         title: "When this at a map",
         status: true,
      },
   ]);
   
  return <Container>
      <Header />
      <TodoAdd  todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
  </Container>
}

export default App;
