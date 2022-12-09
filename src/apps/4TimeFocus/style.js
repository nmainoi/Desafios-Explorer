import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
gap: 100px;
height: 100vh;

`;

export const TimeWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 50.166px;
line-height: 148px;
`;
export const TimerArea = styled.div`

display: flex;

width: 250px;
align-self: center;

`
export const ButtonTimerArea = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
 > button {
    border: none;
    background: none;
 }

`


export const OptionsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 32px;

`;

export const VolumeWrapper = styled.div`
width: 100%;
`;

export const ButtonTheme = styled.button`
    border: none;
    background-color: ${(props) => props.isSelect ? "#02799D" : "#E1E1E6"};
    border-radius: 24px;
    width: 138px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;