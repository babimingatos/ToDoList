import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="todo">
    <div className="conteudo">
      <p>{todo.text}</p>
      <p className="categoria">
        {todo.category}
      </p>
      <div>
        <button>Completar</button>
        <button>X</button>
      </div>
    </div>
  </div>
  )
}

export default Todo