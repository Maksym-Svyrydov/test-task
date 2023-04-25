import styled from 'styled-components';

export const Titile = styled.h1`
  padding: 10px 40px;
`;

export const Layout = styled.div`
  width: 100%;
  text-decaration: none;
  display: flex;
  flex-direction: column;
`;
export const NavContainer = styled.header`
  ${'' /* outline: 2px solid tomato; */}
  min-height: 64px;
  position: sticky;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px, auto;
  width: 100%;
  padding-left: auto;
  padding-right: auto;
  flex-direction: row;
  border-bottom: 5px solid gray;
`;
export const NavList = styled.nav`
  ${'' /* outline: 2px solid green; */}
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding-left: 40px;
`;
export const NavItem = styled.div`
  ${'' /* display: flex; */}
  border: 2px solid gray;
  border-radius: 4px;
  margin: 5px 10px;
  padding: 4px;
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
`;
