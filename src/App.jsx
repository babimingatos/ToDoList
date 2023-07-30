import { useState } from 'react'
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);//DADOS PARA SEREM MANIPULADOS

  return <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todolist">
      {todos.map((todo) => ( //com o map de array, é possivel ver os objetos
        <Todo todo={todo} />
      ))}

    </div>
    <TodoForm/>
  </div>

}

export default App
