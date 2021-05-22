import styled from 'styled-components';

export const TodoList = () => {
    return (
        <div>
            <p>TODO</p>
            <ul>
                <li>
                    read a book
                    <button>Done</button>
                    <button>Delete</button>
                </li>
                <li>
                    read a book
                    <button>Done</button>
                    <button>Delete</button>
                </li>
                <li>
                    read a book
                    <button>Done</button>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    )
}