import React from 'react'

const TodoInput = () => {
    return (
        <div>
            <form action="" className='form'>
                <input type="text" name="name" placeholder='할 일을 입력해주세요'
                    className='input' />
                <button type='submit' className='btn'>추가</button>
            </form>
        </div>
    )
}

export default TodoInput