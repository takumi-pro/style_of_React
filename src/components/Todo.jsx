import styled from 'styled-components';
import React from "react";
import { AddTask } from './AddTask';
import { TodoList } from './TodoList';
import { DoneList } from './DoneList';

const completeFlg = {
    complete: true,
    incomplete: false
}

export class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            incompleteTodos: [],
            completeTodos: [],
        }
        this.onChangeInputVal = this.onChangeInputVal.bind(this);
        this.onClickAddTask = this.onClickAddTask.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }

    onClickAddTask(e) {
        e.preventDefault();
        if (!this.state.inputVal) return;
        const newTodos = [this.state.inputVal, ...this.state.incompleteTodos];
        this.setState({
            inputVal: '',
            incompleteTodos: newTodos
        });
    }

    onClickDone(index) {
        //削除処理
        const newTodos = [...this.state.incompleteTodos];
        const newCompleteTodo = newTodos.splice(index, 1);
        this.setState({incompleteTodos: newTodos});

        const newCompleteTodos = [newCompleteTodo, ...this.state.completeTodos];
        this.setState({completeTodos: newCompleteTodos});
    }

    onClickDelete(index, flg) {
        //削除処理
        const newTodos = (flg) ?
        [...this.state.incompleteTodos] :
        [...this.state.completeTodos];
        newTodos.splice(index, 1);
        (flg) ?
        this.setState({incompleteTodos: newTodos}) :
        this.setState({completeTodos: newTodos});
    }

    onChangeInputVal(e) {
        this.setState({inputVal: e.target.value});
    }

    render() {
        const incompleteTodos = this.state.incompleteTodos;
        const completeTodos = this.state.completeTodos;
        const inputVal = this.state.inputVal;
        return (
            <Scontainer>
                <AddTask
                    todos={incompleteTodos}
                    inputVal={inputVal}
                    onChangeInputVal={this.onChangeInputVal}
                    onClickAddTask={this.onClickAddTask}
                ></AddTask>
                <TodoList
                    flg={completeFlg.complete}
                    title='TODO'
                    todos={incompleteTodos}
                    onClickDelete={this.onClickDelete}
                    onClickDone={this.onClickDone}
                ></TodoList>
                <TodoList
                    flg={completeFlg.incomplete}
                    title='DONE'
                    todos={completeTodos}
                    onClickDelete={this.onClickDelete}
                ></TodoList>
            </Scontainer>
        )
    }
}

const Scontainer = styled.div`
    width: 400px;
    margin: 0 auto;
    background-color: #e6f9ff;
    padding: 15px 35px;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    border-radius: 7px;
    margin-top: 25px;
`