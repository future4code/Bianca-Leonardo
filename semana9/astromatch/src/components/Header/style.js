import styled from 'styled-components';

export const HeaderContainer = styled.div`
    border-bottom: 1px solid lightgray;
`

export const MenuCotainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    button {
        border: none;
        color: lightgray;
        background-color: transparent;
        transition-duration: 0.3s;

        :hover{
            color: blue;
            transform: scale(1.1, 1.1);
            transition-duration: 0.3s;
        }
    }
`

export const ButtonInativo = styled.button`
    background-color: white; 
    border: white;
    color: white;
    width: 39px;
`