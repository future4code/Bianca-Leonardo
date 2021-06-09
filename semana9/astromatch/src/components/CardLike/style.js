import styled from 'styled-components';

export const CardLikeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin: 12px;
`

export const ButtonNo = styled.button`
    background-color: white;
    font-size: 30px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;

    :hover {
        transform: scale(1.1, 1.1);
        transition-duration: 0.3s;
    }
`

export const ButtonYes = styled.button`
    background-color: white;
    font-size: 28px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;

    :hover {
        transform: scale(1.1, 1.1);
        transition-duration: 0.3s;
    }
`