import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoForm'

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }])
    }

    const handleToggleCompleted = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? {
                ...todo,
                completed: !todo.completed
            }
                : todo
        ))
    }

    const handleDeleteTodo = index => {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const handleEditTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            id,
            task: todo.task,
            completed: todo.completed,
            isEditing: !todo.isEditing
        } : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            id,
            task,
            completed: todo.completed,
            isEditing: !todo.isEditing
        } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Todos App</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} editObj={todo} key={index} />
                    ) : (
                        <Todo object={todo}
                            key={index}
                            toggleCompleted={handleToggleCompleted}
                            deleteTodo={() => handleDeleteTodo(index)}
                            editTodo={handleEditTodo} />)
                ))
            }
        </div>
    )
}

export default TodoWrapper
