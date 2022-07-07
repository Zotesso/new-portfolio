import styled, { keyframes } from 'styled-components';

const bubbleFloat = keyframes`
  0% {
    background-image: url('images/Bubble-hand.svg');
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  80% {
    transform: translateY(-300px) rotate(360deg);
    opacity: 0.4;
  }
  100% {
    background-image: url('images/bubble-explosion.svg');
    transform: translateY(-400px) rotate(360deg);
    opacity: 0.2;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  height: 60px;
  color: rgba(34, 32, 71, 1);
  background-color: rgba(34, 32, 71, 0.2);
`;

export const Bubble = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 54px;
  height: 54px;
  background-size: cover !important;
  background-repeat: no-repeat;
  animation: ${ bubbleFloat } 4s linear infinite;
  bottom: -150px;
`;

export const BubbleContainer = styled.ul`
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 100%;
  overflow: hidden;

  ${Bubble}:nth-child(1) {
    left: 56%;
    animation-delay: 0s;
  }

  ${Bubble}:nth-child(2) {
    left: 20%;
    width: 30px;
    height: 30px;
    animation-delay: 2.5s;
  }

  ${Bubble}:nth-child(3) {
    left: 10%;
    animation-delay: 4.5s;
  }

  ${Bubble}:nth-child(4) {
    left: 82%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
    animation-duration: 6s;
  }

  ${Bubble}:nth-child(5) {
    left: 32%;
    animation-delay: 4.2s;
  }

  ${Bubble}:nth-child(6) {
    left: 5%;
    width: 40px;
    height: 40px;
    animation-delay: 2.5s;
    animation-duration: 5s;
  }

  ${Bubble}:nth-child(7) {
    left: 89%;
    animation-delay: 1.5s;
  }

  ${Bubble}:nth-child(8) {
    left: 59%;
    width: 30px;
    height: 30px;
    animation-delay: 5.5s;
  }

  ${Bubble}:nth-child(9) {
    left: 27%;
    width: 20px;
    height: 20px;
    animation-delay: 1.5s;
  }

  ${Bubble}:nth-child(10) {
    left: 68%;
    animation-delay: 2.5s;
    animation-duration: 8s;
  }

  ${Bubble}:nth-child(11) {
    left: 42%;
    width: 40px;
    height: 40px;
    animation-delay: 6.5s;
    animation-duration: 5.6s;
  }

  ${Bubble}:nth-child(12) {
    left: 28%;
    width: 40px;
    height: 40px;
    animation-delay: 6.5s;
    animation-duration: 5s;
  }

  ${Bubble}:nth-child(13) {
    left: 35%;
    width: 20px;
    height: 20px;
    animation-delay: 2.5s;
    animation-duration: 5s;
  }

  ${Bubble}:nth-child(14) {
    left: 54%;
    animation-delay: 1.5s;
    animation-duration: 6s;
  }

  ${Bubble}:nth-child(15) {
    left: 66%;
  }

  ${Bubble}:nth-child(16) {
    left: 75%;
    width: 40px;
    height: 40px;
    animation-delay: 6.5s;
    animation-duration: 3s;
  }
`;

