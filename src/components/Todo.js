import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ object, toggleCompleted, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleCompleted(object.id)}
                className=
                {`${object.completed ? "completed" : ""}`}>{object.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon second-child" icon={faPenToSquare} onClick={() => editTodo(object.id)} />
                <FontAwesomeIcon className="delete-icon second-child" icon={faTrash} onClick={deleteTodo} />

            </div>
        </div>
    )
}
