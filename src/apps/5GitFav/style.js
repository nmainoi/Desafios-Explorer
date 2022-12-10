import styled from "styled-components";

export const Container = styled.div`
  background-color: #111;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  margin-top: 80px;
  width: 1120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  > input {
    padding: 16px;
    gap: 10px;

    width: 462px;
    height: 48px;

    background: #06181c;
    border-radius: 5px;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #7c7c8a;
  }
  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    width: 170px;
    height: 48px;

    background: #065e7c;
    border-radius: 5px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 660px;
  background: #092d38;
  border-radius: 12px;
  border: 1px solid #4a808c;
`;

export const TableHeader = styled.div`
  display: flex;
  > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
  }
  > .users {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px 16px 40px;
    gap: 12px;

    width: 504px;
    height: 64px;
  }
  > .repo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px 16px 40px;
    gap: 12px;

    width: 218px;
    height: 64px;
  }
  > .follow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px 16px 40px;
    gap: 12px;

    width: 220px;
    height: 64px;
  }

  > .action {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px 16px 40px;
    gap: 12px;

    width: 178px;
    height: 64px;
  }
`;

export const TableBody = styled.div`
  border-radius: 0 0 12px 12px;
  height: 100%;
  overflow-y: auto;
  // customize scroll
  &::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #4a808c;
    border-radius: 10px;
  }

  & > div:nth-child(even) {
    background: #06181c;
  }
  & > div:nth-child(odd) {
    background: rgba(6, 22, 27, 0.5);
  }
`;

export const TableRow = styled.div`
  display: flex;

  > .rowUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 24px 24px 40px;
    gap: 16px;

    width: 504px;
    height: 104px;
    > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
    }
    > div {
      display: flex;
      flex-direction: column;
    }
  }

  > .rowRepo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px 24px 40px;
    gap: 12px;

    width: 219px;
    height: 104px;
  }
  > .rowFollow {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px 24px 40px;
    gap: 12px;

    width: 219px;
    height: 104px;
  }
  > .rowAction {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px 24px 40px;
    gap: 12px;

    width: 178px;
    height: 104px;
    > button {
      background: none;
      border: none;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;

      display: flex;
      align-items: center;

      color: #f75a68;
    }
  }
`;

export const NoData = styled.div`

height: 100%;
display: flex;
align-items: center;
justify-content: center;
gap : 60px;

> h1 {
    font-family: 'Roboto Mono';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 25px;
/* or 62% */



color: #4E5455;
}
`;