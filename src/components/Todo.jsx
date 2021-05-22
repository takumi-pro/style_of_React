import styled from 'styled-components';
import React from "react";
import { AddTask } from './AddTask';
import { TodoList } from './TodoList';
import { DoneList } from './DoneList';

export class Todo extends React.Component{
    render() {
        return (
            <Container>
                <AddTask></AddTask>
                <TodoList></TodoList>
                <DoneList></DoneList>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    background-color: #e6f9ff;
    padding: 15px 35px;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    border-radius: 7px;
`