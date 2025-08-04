import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputStyled, DivWrapper, LabelStyled } from './Input.style';




export const Input = ({ label, id, type = "text"}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <DivWrapper>
      <InputStyled
        id={id}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '' || false)}
        autocomplete = "off"
      />
      <LabelStyled $isFloating={isFocused}>
        {label}
      </LabelStyled>
    </DivWrapper>
  );
};

Input.PropTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
