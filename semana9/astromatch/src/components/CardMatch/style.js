import styled from 'styled-components';

export const CardMatchContainer = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid lightgray;
    border-radius: 8px;
`

export const ImgPrincipal = styled.img`
    position: absolute;
    z-index: 1;
    width: 98%;
    height: 98%;
    object-fit: scale-down;
`

export const ImgFundo = styled.img`
    position: absolute;
    width: 100%;
    height: 420px;
    filter: blur(3px);
`

export const InfoContainer = styled.div`
    background-color: black;
    opacity: 50%;
    color: white;
    position: absolute;
    z-index: 1;
    bottom: 0;
    padding: 15px;
    width: 92%;
    height: 60px;
    gap: 5;

    p {
        margin: 0;
        color: white;
        opacity: 100%;
        font-weight: 600;
    }
`