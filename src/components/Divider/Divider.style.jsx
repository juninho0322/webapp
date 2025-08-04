import styled from "styled-components";



export const DividerStyled = styled.span`
  display: block;
  ${({ $direction }) =>
    $direction === "vertical"
      ? `
    width: 1px;
    height: 100%;
    border-left: 1px solid #ccc;
  `
      : `
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #ccc;
  `}

  margin-top: ${({ $margintop }) => $margintop || "10px"};
  margin-bottom: ${({ $marginbottom }) => $marginbottom || "10px"};
  margin-left: ${({ $marginleft }) => $marginleft || "0"};
  margin-right: ${({ $marginright }) => $marginright || "0"};
`;
