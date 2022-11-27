import React, { useState } from 'react';
import '../../App.css';
import { v1 as uuidv1 } from 'uuid';
import { Row, Col, Button,FormControl } from '.react-bootstrap'
import s from "./TodoAdd.module.css"


function TodoAdd({ todo, setTodo }) {

   const [value, setValue] = useState('')

   function saveTodo() {
      setTodo(
         [...todo, {
            id: uuidv1(),
            title: value,
            status: true,
         }]
         )
         setValue=('')
   }

return <Row>
   <Col className={s.addTodoForm}>
   <FormControl placeholder='enter a word' value={value} onChange={(e) => setValue(e.target.value)} />
   <Button onClick={saveTodo} className={s.btn}>Save</Button>
   </Col>
</Row>;
}

export default TodoAdd;
