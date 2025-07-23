import styled from "styled-components";

export const ImgStyled = styled.img`
  padding: ${({ $padding }) => $padding || "0"};
  margin-bottom: ${({ $marginbottom }) => $marginbottom || "10px"};
`
