import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodoAction, removeTodoAction } from '../store/todoReducer';

const TodoItem = ({ description, id }) => {
  const dispatch = useDispatch();

  const editTodo = () => {
    const editDescription = prompt()
    const editData = {
      dataId: id,
      dataDescription: editDescription
    }

    dispatch(editTodoAction(editData))
  }

  const removeTodo = () => {
    dispatch(removeTodoAction(id))
  }

  return (
    <div>
      <h1>{description}</h1>
      <button onClick={editTodo}>Edit</button>
      <button onClick={removeTodo}>Remove</button>
    </div>
  )
}

export default TodoItem