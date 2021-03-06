import styled from 'styled-components';
import { TodoRow } from './TodoRow';

export const DoneList = () => {
    return (
        <div>
            <p>DONE</p>
            <Sul>
                <Sli>
                    <TodoRow></TodoRow>
                </Sli>
                <Sli>
                    <TodoRow></TodoRow>
                </Sli>
            </Sul>
        </div>
    )
}

const Sul = styled.ul`
    list-style: none;
    padding: 0;
`

const Sli = styled.li`
    color: #444;
    font-size: 18px;
    width: 100%;
    display: flex;
    padding-bottom: 4px;
    margin-bottom: 14px;
    border-bottom: 1px solid #aaa;
`

const Sspan = styled.span`
    width: 70%;
    justify-content: start;
    overflow-wrap: break-word;
`

const Sbutton = styled.button`
    width: 15%;
    height: 25px;
    padding: 2px 8px;
    border: none;
    color: #444;
    box-sizing: border-box;
    flex: end;
    margin-left: 2px;
    transition: background-color .4s;
    &:hover {
        background-color: #ddd;
        transition: background-color .4s;
    }
`
