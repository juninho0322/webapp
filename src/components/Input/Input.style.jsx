import styled, { css } from 'styled-components';

const floatingLabelStyles = css`
  top: -0.25rem;
  font-size: 0.75rem;
  color: #007bff;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 1rem 0 1rem 0.25rem;
  font-size: 1rem;
  border: 1px solid
   ${({ $isValid }) =>
      $isValid === false ? 'red' :
      $isValid === true ? 'green' : '#ccc'};
  border-radius: 4px;
  background: white;


   &:focus {
    outline: none;
    border-color: ${({ $isValid }) =>
      $isValid === false ? '#007bff' : '#red'};
  }


  /* Autofill styles to float label */
  &:-webkit-autofill {
    background-color: white;
    transition: background-color 9999s ease-out 0s;
  }

  &:-webkit-autofill ~ label {
    ${floatingLabelStyles}
  }


`;

export const DivWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 1.5rem;
    padding-bottom: ${({ $paddingbottom }) => $paddingbottom} ;
`;


export const LabelStyled = styled.label`
  position: absolute;
  left: 0.50rem;
  top: ${({ $labelTop }) => $labelTop || "1.75rem" };
  background: white;
  padding: 0 0.25rem;
  transition: all 0.2s ease;
  pointer-events: none;
  color: #4D4D4D;
  ${({ $isFloating }) => $isFloating && floatingLabelStyles}
  `;

 export const DivSpanStyled = styled.div`
  padding-top: 0.25rem;

 `

export const SpanStyled = styled.span`
  position: absolute;
  font-size: 0.875rem;
  left: 0;
  color: red;
  padding: 0.25rem;
`;

