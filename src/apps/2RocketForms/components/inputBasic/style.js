import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
> label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    > span {
        color: #C1BCCC;
        font-size: 12px;
        line-height: 20px;
    }
}
> input {

    border: 1px solid #E6E6F0;
    border-radius: 8px;
    min-height: ${props => `${props.customHeigth }px` };
    padding: 24px 15px;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
}
`;