import styled, { css } from 'styled-components';

const floatingLabelStyles = css`
  top: -0.25rem;
  font-size: 0.75rem;
  color: #007bff;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 1rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;

  &:focus {
    outline: none;
    border-color: #007bff;
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
    align-items: center;
    position: relative;
    margin-bottom: 1.5rem;
`;


export const LabelStyled = styled.label`
  position: absolute;
  left: 0.50rem;
  background: white;
  padding: 0 0.25rem;
  transition: all 0.2s ease;
  pointer-events: none;
  color: #4D4D4D;
  ${({ $isFloating }) => $isFloating && floatingLabelStyles}
  `;

