import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput';

import { useDispatch, useSelector } from 'react-redux';
import { getTodosAction } from '../store/todoReducer';

const Todo = () => {
    const dispatch = useDispatch();
    let todo = useSelector(state => state.todo.todo)

    const getTodos = () => {
        dispatch(getTodosAction())
    }

    useEffect(() => {
        getTodos();
        console.log(todo)
    })

    return (
        <>
            <div>Todoist</div>
            <TodoInput />
            {
                todo.map((item, index) => (
                    <TodoItem description={item.description} id={item.id} key={index} />
                ))
            }
        </>
    )
}

export default Todo