import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const IconStyled = styled(FontAwesomeIcon)`
  color: ${({ color }) => color || "#inherit"};
  font-size: ${({ size }) => size || "1rem"};
  margin: ${({ margin }) => margin || "0"};

  `;




