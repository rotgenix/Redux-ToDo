import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToDo } from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            {
                todos.map((todo) => {
                    return <li key={todo.id}>
                        {
                            todo.text
                        }
                        <button

                            onClick={() => {
                                dispatch(removeToDo(todo.id));
                            }}
                        >X</button>
                    </li>

                })
            }
        </>
    )
}

export default Todos