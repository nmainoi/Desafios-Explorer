import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const HeaderBG = styled.div`
  content: "";
  background-color: #333;
  width: 100%;
  height: 368px;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const Header = styled.div`
  margin: 80px 0 42px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  > h1 {
    font-family: "Archivo", "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
  }
  > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #42d3ff;
  }
`;

export const Main = styled.div`
  width: 736px;
  height: 100%;
  padding-bottom: 91px;
`;

export const Form = styled.div`
  background-color: #fafafc;
  border-radius: 8px 8px 0px 0px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h1 {
    font-family: "Archivo", "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e6e6f0;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  > select {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    border: 1px solid #e6e6f0;
    border-radius: 8px;
    min-height: 56px;
    padding: 24px 15px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  gap: 59px;
`;

export const DateWrapper = styled.div`
  width: 312px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 256px;
`;

export const ButtonWrapper = styled.div`
  background: #f0f0f4;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 136px;

  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 40px;
    background: #04d361;
    border-radius: 8px;
    width:  608px;
    border: none;
    font-family: "Archivo";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }
`;
