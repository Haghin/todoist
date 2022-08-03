import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todoReducer';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        const todoObject = {
            id: Date.now(),
            description: todo,
        }
        dispatch(addTodoAction(todoObject));
    }

    return (
        <div className='todo-search'>
            <input onChange={e => setTodo(e.target.value)} value={todo} type="text" name="add" id="add" />
            <button onClick={addTodo}>Add Item</button>
        </div>
    )
}

export default TodoInput