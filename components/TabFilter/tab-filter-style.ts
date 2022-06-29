import styled from 'styled-components';

interface Tab {
  mainColor?: string;
}

export const TabFloatBar = styled.section`
  position: absolute;
  height: 30px;
  width: 140px;
  z-index: 2;
  transform: translateX(-60px);
  transition: all .35s ease-in-out;
`;

export const HorizontalTab = styled.nav`
  a {
    transition: all .35s ease-in-out;
    display: block;
    font-size: 20px;
    text-decoration: none;
    padding: 7px 15px;
    position: relative;
    z-index: 10;
  }

  a.active {
    color: #fff;
  }

  li:not(:last-child) {
    margin-right: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  &:hover {
    color: red;
  }
`;