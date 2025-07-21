import styled from "styled-components";

export const ImgStyled = styled.img`
  src: ${({ src }) => src || ""};
  alt: ${({ alt }) => alt || "Image"}
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0"};
  margin-bottom: ${({ marginbottom }) => marginbottom || "10px"};
`
