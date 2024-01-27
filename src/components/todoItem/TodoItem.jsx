
import React, { useState } from 'react'
import "./todoItem.style.css"
import CheckList from '../checkList/CheckList'
import { v4 as uuidv4 } from 'uuid';
import Todo from '../todo/Todo';
import EditTodoForm from '../editTodoForm/EditTodoForm';
import ClearAll from '../popupClearAll/ClearAll';
uuidv4();

const TodoItem = () => {

    const [todos, setTodos] = useState([])
    
     const [isPopupVisible, setIsPopupVisible] = useState(false);
    
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
    const completedCount = todos.filter((el) => el.completed).length
    const totalCount = todos.length


     // Show the popup when clearAll is clicked
  const clearAll = () => {
    setIsPopupVisible(true);
  };

  const pressYes = () => {
      setTodos([]);
       setIsPopupVisible(false);
  };

  const pressNo = () => {
    setIsPopupVisible(false);
  };
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
          <p className="completed-count"> {`${completedCount} of ${totalCount} tasks done`} </p>

          <button className='clear-all' onClick={clearAll}>Clear All</button>
           {isPopupVisible && <ClearAll yes={pressYes} no={pressNo} />}
    </div>
  )
}

export default TodoItem



