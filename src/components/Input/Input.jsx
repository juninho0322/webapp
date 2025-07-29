import { useState } from 'react';
import { InputWrapper, StyledLabel, StyledInput } from './Input.style';

export const Input = ({ label, id, type = "text"}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        id={id}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '' || false)}

      />
      <StyledLabel htmlFor={id} isFloating={isFocused}>
        {label}
      </StyledLabel>
    </InputWrapper>
  );
};
