import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 100px auto auto;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Header = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 0 10%;

`;
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 64px;
    > li > a {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

`;

export const Main = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-top: 107px;


`;
export const ImgArea = styled.div`

margin-right: 82px;
`;
export const TextArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
> h1 {
    font-family: 'JetBrains Mono';
font-style: normal;
font-weight: 700;
font-size: 36px;
text-align: center;
}
> h1 > span {
    color: ${({theme}) => theme.COLORS.GREEN};
}
> p > span {
    color: ${({theme}) => theme.COLORS.GREEN};
}
> p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${({theme}) => theme.COLORS.GRAY};
    text-align: center;
}
`;
export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    > span {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
        margin: 27px 0 23px 0;
    }
`;

export const Line = styled.div`
width: 568px;
height: 0px;


border: 1px solid #00BFA6;`
;




