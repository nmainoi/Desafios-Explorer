import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 100px auto;
grid-template-areas:
    "header"
    "main";
`;


export const Header = styled.div`
grid-area: header;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
color: #fff;
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
`;

export const Main = styled.div`
grid-area: main;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
color: #fff;
width: 100%;
height: 100%;
overflow-y: auto;
display: flex;
flex-direction: column;
padding: 10px 5%;
gap: 10px;
`;