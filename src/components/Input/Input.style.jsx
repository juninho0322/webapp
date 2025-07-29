import styled from 'styled-components';

export const InputWrapper = styled.div`
  height: 100%; /* or a fixed height like 100vh if it's the full screen */
  display: flex;
  align-items: center;   /* vertical centering */
  justify-content: center; /* horizontal centering */
  position: relative;
  margin-bottom: 1.5rem;

`;

export const StyledInput = styled.input`
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
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: ${({ isFloating }) => (isFloating ? '-0.25rem' : '1.6em')};
  left: 0.50rem;
  font-size: ${({ isFloating }) => (isFloating ? '0.75rem' : '1rem')};
  color: ${({ isFloating }) => (isFloating ? '#007bff' : '#666')};
  background: white;
  padding: 0 0.25rem;
  transition: all 0.2s ease;
  pointer-events: none;
  `
