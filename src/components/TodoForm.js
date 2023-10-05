import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo('')

    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                className='todo-input'
                value={todo}
                placeholder='What is the task today? '
                onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm
