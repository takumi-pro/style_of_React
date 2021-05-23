import styled from 'styled-components';

export const TodoList = (props) => {
    const { title, todos, flg, onClickDelete, onClickDone, onClickReturn } = props;
    return (
        <Scontainer>
            <p>{title}</p>
            <Sul>
                {todos.map((todo, index) => {
                    return (
                        <Sli key={index}>
                            <Sspan>{todo}</Sspan>
                            {(flg) ?
                            <>
                                <Sbutton onClick={() => onClickDone(index)}>Done</Sbutton>
                                <Sbutton onClick={() => onClickDelete(index, flg)}>Delete</Sbutton>
                            </>
                            :
                            <>
                                <Sbutton onClick={() => onClickReturn(index)}>Return</Sbutton>
                                <Sbutton onClick={() => onClickDelete(index, flg)}>Delete</Sbutton>
                            </>
                            }
                        </Sli>
                    );
                })}
            </Sul>
        </Scontainer>
    )
}

const Scontainer = styled.div`
    margin-bottom: 25px;
`

const Sul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
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