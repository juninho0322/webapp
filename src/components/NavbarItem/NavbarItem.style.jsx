import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarItemStyled = styled(Link)`
  display: flex;
  color: #4D4D4D;
  text-decoration: none;
  margin-bottom: 10px;
  family: 'Inter', sans-serif;
  letter-spacing: -0.14px;
  padding: 10px;
  gap: 10px;
  align-items: center;
  transition: all 0.2s ease;

   &:hover {
    color: #1B59F8;
    background-color: #F0F0F9;
    border-radius: 15px;

  }

`




