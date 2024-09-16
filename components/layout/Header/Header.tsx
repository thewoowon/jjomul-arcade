import styled from "@emotion/styled";

type HeaderProps = {
  display?: "none" | "block";
};

const Header = ({ display = "block" }: HeaderProps) => {
  return (
    <Container
      style={{
        display,
      }}
    ></Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 20px 16px;
  height: 57px;
  background-color: white;
  z-index: 100;
`;
