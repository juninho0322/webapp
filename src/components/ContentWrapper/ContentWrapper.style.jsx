import styled from "styled-components";
import { Row } from "react-grid-system";

export const ContentWrapperStyled = styled(Row)`
   box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
  padding: ${({ $padding }) => $padding || "0"};

`

