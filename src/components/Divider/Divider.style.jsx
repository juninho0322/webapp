import styled from "styled-components";



export const DividerStyled = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-top: ${({ $margintop }) => $margintop || "10px"} ;
  margin-bottom: ${({ $marginbottom }) => $marginbottom || "10px"} ;
`;
