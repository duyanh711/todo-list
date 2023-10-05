import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, editObj }) => {
    const [todo, setTodo] = useState(editObj.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo, editObj.id)
        setTodo('')

    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
                className='todo-input'
                value={todo}
                placeholder='What is the task today? '
                onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditTodoForm
