import styled from 'styled-components';

export const MyComponent = () => {
    return (
        <div>
            <Sh1>Hello!!</Sh1>
            <Sp>I'm Takumi</Sp>
        </div>
    )
}

const Sh1 = styled.h1`
    color: red;
`

const Sp = styled.p`
    color: green;
`