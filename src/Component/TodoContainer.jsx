import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import TodoHeader from './TodoHeader'

const TodoContainer = () => {
  // 🧊 state 
  const [todoList, setTodoList] = useState([])
  
  // 데이터 가져오기
  // ❓ hook 
  useEffect(() => {
    // 비동기 요청
    fetch('http://localhost:8080/todos')
      .then((response) => response.json() )
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error)) 
    
  }, []) 

  return (
    <div className='container'>
      <TodoHeader />
      <TodoInput />
      <TodoList todoList={todoList} />
      <TodoFooter />
    </div>
  )
}

export default TodoContainer