import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const IconStyled = styled(FontAwesomeIcon)`
  margin-right: ${({ $marginright }) => $marginright || "0.5rem"};
  margin-left: ${({ $marginleft }) => $marginleft || "0"};

  &:hover {
    color: ${({ $hovercolor }) => $hovercolor || "#1B59F8"};

  `;




