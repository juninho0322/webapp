import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarItemStyled = styled(Link)`
  display: block;
  color: #4D4D4D;
  text-decoration: none;
  margin-bottom: 10px;
  family: 'Inter', sans-serif;
  letter-spacing: -0.14px;
  padding: 10px;

   &:hover {
    color: #1B59F8;
    background-color: #F0F0F9;
    border-radius: 5px;

  }

`

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  vertical-align: middle;

  }

`;




