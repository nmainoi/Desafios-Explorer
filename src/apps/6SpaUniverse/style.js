import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 122px auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "main";
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  gap: 32px;
  > ul {
    display: flex;
    gap: 32px;
    list-style: none;
  }
`;

export const Main = styled.div`
  grid-area: main;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

export const Home = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  > h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 125%;

    color: #e1e1e6;
  }
  > button {
    background-color: transparent;
    padding: 12px 32px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
    &:hover {
      background-color: #ffffff;
      color: #02799d;
    }
  }
`;

export const Link = styled.a`
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  font-size: 24px;
  line-height: 22px;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#C4C4CC")};
`;

export const Section = styled.div`
  margin-top: 62px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > h1 {

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 125%;

    color: #e1e1e6;
  }
  > p {
    width: 648px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;

    color: #e1e1e6;
  }
`;
