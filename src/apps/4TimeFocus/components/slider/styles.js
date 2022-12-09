import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
gap: 20px ;

.soundIcon {
  width: 50px;
}
`;

export const Slider = styled.input`
-webkit-appearance: none;
width: 100%;
height: 4px;
border-radius: 4px;
background-color: #E1E1E6;
outline: none;
opacity: 1;

::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: gray;
    cursor: pointer;
}

`;