import React from 'react'

const TodoItem = ({todo, onToggle}) => {
    let {no, name, status} = todo // 이게 무야
    status = status == 1 ? true : false
    return (
        <li className='todoItem' key={todo.no}>
            <div className="item">
                {/* ✅ 체크박스 */}
                <input type="checkbox" id={todo.no} 
                    checked={status}
                    onChange={() => onToggle(todo)} />
                <label htmlFor={todo.no}></label>
                <span>{todo.name}</span>
            </div>
            <div className="item">
                <button className='btn'>삭제</button>
            </div>
        </li>
    )
}

export default TodoItem