import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onToggle }) => {
  return (
    <ul className='todoList'>
      {todoList.map((todo) => {
          return (
            <TodoItem todo={todo} onToggle={onToggle} />
            
          )
        })}
    </ul>
  )
}

export default TodoList