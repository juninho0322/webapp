import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const IconStyled = styled(FontAwesomeIcon)`
  color: ${({ color }) => color || "#inherit"};
  font-size: ${({ size }) => size || "1rem"};
  margin-right: ${({ margin }) => margin || "0"};
  transition: color 0.2s ease;


  `;




