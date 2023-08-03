import React from 'react'
import '../App.css';

//props->
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="conteudo">
        <p> {todo.text} </p>
        <p className="categoria">
          {todo.category}
        </p>
        <div>
          <button className="completar" onClick={() => completeTodo(todo.id)}> Completar </button>
          <button className="remover" onClick={() => removeTodo(todo.id)}> X </button>
        </div>
      </div>
    </div>
  )
}

export default Todo