
import React, { useState } from 'react'
import "./todoItem.style.css"
import CheckList from '../checkList/CheckList'
import { v4 as uuidv4 } from 'uuid';
import Todo from '../todo/Todo';
import EditTodoForm from '../editTodoForm/EditTodoForm';
uuidv4();

const TodoItem = () => {

     const [todos, setTodos] = useState([])
    
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
    
      const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

      const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
      }
    
    const editTask = (task, id) => {
        setTodos(todos.map((todo)=>todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
    }
  return (
     <div className='TodoWrapper'>
          <CheckList addTodo={ addTodo} />
          {todos.map((todo, index) => (
              todo.isEditing ? (
                  <EditTodoForm editTodo={editTask} task={todo}/>
              ) : (
                      
                  <Todo task={todo} key={index}
                      toggleComplete={toggleComplete}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                  />
              )
         ))}
    </div>
  )
}

export default TodoItem



