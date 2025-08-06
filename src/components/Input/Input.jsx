import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputStyled, DivWrapper, LabelStyled, SpanStyled, DivSpanStyled } from './Input.style';






export const Input = ({ label, id, type = "text", value, name, onChange, isValid}) => {
  const [isFocused, setIsFocused] = useState(false);


  return (
    <DivWrapper>
      <InputStyled
        id={id}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '' || false)}
        onChange={onChange}
        value={value}
        name={name}
      />

      <LabelStyled $isFloating={isFocused}>
        {label}
      </LabelStyled>

      <DivSpanStyled>
      {isValid === false && <SpanStyled $isValid={isValid}>Juninho</SpanStyled>}
      </DivSpanStyled>
    </DivWrapper>
  );
};

Input.PropTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
