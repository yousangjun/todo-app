import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <li className='todoItem' key={todo.no}>
            <div className="item">
                <input type="checkbox" name="" id="no-1" />
                <label htmlFor="no-1"></label>
                <span>{todo.name}</span>
            </div>
            <div className="item">
                <button className='btn'>삭제</button>
            </div>
        </li>
    )
}

export default TodoItem