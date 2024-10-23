import styled from "@emotion/styled";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const Header = () => {
  return (
    <Container className={caveat.className}>
      <Logo>JJOMUL</Logo>
      <Nav>about</Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  height: 80px;
  background-color: white;
  z-index: 100;
  padding: 0 64px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: black;
  width: fit-content;
`;

const Nav = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;
  font-weight: 400;
  color: black;
  width: fit-content;
`;
