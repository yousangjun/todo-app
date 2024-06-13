import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul className='todoList'>
      {todoList.map((todo) => {
          return (
            <TodoItem todo={todo} />
            
          )
        })}
    </ul>
  )
}

export default TodoList