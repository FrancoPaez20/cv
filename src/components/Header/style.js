import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const HeaderContent = styled.header`
  width: 100%;
  height: 64px;
  background-color: #1b1e1e;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px 0 rgba(255, 255, 255, 0.3);
  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled(FiMenu)`
  color: #fff;
  font-size: 1.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid #fff;
  }
`;

export const MenuItem = styled.a`
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    border: 1px solid #fff;
  }
`;
