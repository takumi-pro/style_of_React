import styled from 'styled-components';

export const AddTask = () => {
    return (
        <div>
            <Sform>
                <Sinput placeholder='Task' name='task' />
                <Sbutton>Add</Sbutton>
            </Sform>
        </div>
    )
}

const Sform = styled.form`
    width: 100%
`

const Sinput = styled.input`
    width: 80%;
    outline: none;
    color: #555;
    font-size: 14px;
    box-sizing: border-box;
    padding: 4px 8px;
    height: 35px;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

const Sbutton = styled.button`
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    height: 35px;
    border: none;
    vertical-align: middle;
    position: relative;
    top: -1px;
    color: #555;
    font-size: 14px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: background-color .4s;
    &:hover {
        background-color: #ddd;
        transition: background-color .4s;
    }
`