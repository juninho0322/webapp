import styled from "styled-components";


export const ImgageStyled = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
  padding: ${({ $padding }) => $padding || "0"};
  margin-bottom: ${({ $marginbottom }) => $marginbottom || "10px"};
  width: ${({ $width }) => $width || "auto"};
`
