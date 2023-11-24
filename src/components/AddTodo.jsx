import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDO } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addToDO(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input type="text"
                required
                placeholder='Enter a todo...'
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>
                Add
            </button>
        </form >
    )
}

export default AddTodo