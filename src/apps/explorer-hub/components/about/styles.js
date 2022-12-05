import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
border-radius: 10px;
padding: 30px 10px;
display: flex;
flex-direction: column;
gap: 20px;
> h1, p {
    font-family: 'Poppins', sans-serif;
}
`;