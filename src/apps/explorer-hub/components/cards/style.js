import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: auto;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    border-radius: 10px;
    padding: 10px 5px 10px 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > h1 {
        font-weight: 500;
        font-size: 26px;
    }
    > img {
        width: 340px;
        height: 200px;
        object-fit: fit;
        width: 100%;
        border-radius: 10px;
    }
    &:hover {
        transform: scale(0.9);
        transition: 1s;
    }
`;