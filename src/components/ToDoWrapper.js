import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';

uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodo] = useState([])

    const addToDo = todo => {
        setTodo([...todos, {id: uuidv4(), task: todo, 
            completed: false, isEdited: false}])
            console.log(todos)
    }

    const toggle = id => {
        setTodo(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo))
    }

    const deleteToDo = id => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    const editToDo = id => {
        setTodo(todos.map(todo => todo.id === id ? 
            {...todo, isEdited: !todo.isEdited} : todo))
    }

    const editTask = (task, id) => {
        setTodo(todos.map((todo) => todo.id === id ? 
            {...todo, task, isEdited: !todo.isEdited} : todo));
    }

  return (
    <div className='ToDoWrapper'>
        <h1>Ayuh Produktif!!</h1>
        <ToDoForm addToDo={addToDo}/>
        {todos.map((todo, index) => (todo.isEdited ? (<EditToDoForm editToDo={editTask} task= {todo}/>) : 
            (<ToDo task={todo} key={index} 
                toggleComplete={toggle} 
                deleteToDo={deleteToDo}
                editToDo= {editToDo}/>)
        ))}
    </div>
  )
}
