import styled from "styled-components";

export const Container = styled.div`
  > * {
    font-size: 62.5%;
  }

  background-color: #eff1ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  //media querie 1030px
    @media (min-width: 1030px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        
    }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #8e9aaf;
  padding-top: 3.2rem;


  @keyframes leftRigth {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }


}
@keyframes floating {
    0%, 100% {

    transform: translatey(-0.4rem);
  }

  50% {

    transform: translatey(0);
  }
}
.logo {
    animation-name: floating;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
}
  > h1 {
    animation-name: leftRigth;
    animation-duration: 3000ms;
    margin-top: 3.2rem;
    text-align: center;
    width: 100%;
    font-family: "Staatliches";
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.4rem;
    /* identical to box height, or 85% */

    letter-spacing: 0.05em;

    color: #ffffff;

    text-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.25);

    background: #cbc0d3;
  }

  > p {
    padding: 1rem 3.2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 1.5rem;
    /* or 75% */

    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 2.9rem;
    background-color: #eff1ff;
    @media (min-width: 1030px) {
        background-color: transparent;
        color: #ffffff;
    }
  }
  @media (min-width: 1030px) {
       height: 100vh;
    }
`;

export const Main = styled.div`
  display: grid;
  grid-row-gap: 3.2rem;
  @media (min-width: 1030px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "card1 card2"
    "card4 card2"
    "card4 card3";
margin: 1.4rem 1.8rem;
    grid-gap: 3.2rem;
   .Card1 {

        grid-area: card1;
    }
   .Card2 {
        grid-area: card2;
    }
  .Card3 {
        grid-area: card3;
    }
    .Card4 {
        grid-area: card4;
    }
    }
`;
export const Card = styled.div`
  position: relative;
  > h1 {
    position: absolute;
    color: white;
    top: 1.6rem;
    right: 1.2rem;
    font-size: 1rem;
    height: 1.9rem;
    width: 7.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #feeafa;
    letter-spacing: 0.03em;

    color: #4a4e69;
    border-radius: 2rem;

  
  }
  > img {
    width: auto;
  }
`;
