import React from 'react'

function TodoForm() {
    return (
        <div className="todo-form">
            <h2>Criar tarefa</h2>
            <form>
                <input type="text" placeholder="Digite" />
                <select>
                    <option value="">Selecione</option>
                    <option value="">Trabalho</option>
                    <option value="">Pessoal</option>
                    <option value="">Estudo</option>
                </select>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default TodoForm