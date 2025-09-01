import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputStyled, DivWrapper, LabelStyled, SpanStyled, DivSpanStyled } from './Input.style';






export const Input = ({ label, id, type = "text", value, name, onChange, isValid, errorMsg}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = id ?? name; // fallback so label can link


  return (
    <DivWrapper>
      <InputStyled
        id={inputId}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '' || false)}
        onChange={onChange}
        value={value}
        name={name}
        $isValid={isValid}

      />

       {/* Link the label to the input */}
      <LabelStyled htmlFor={inputId} $isFloating={isFocused}>
        {label}
      </LabelStyled>

      <LabelStyled $isFloating={isFocused}>
        {label}
      </LabelStyled>

      <DivSpanStyled>
      {isValid === false && <SpanStyled $isValid={isValid}>{errorMsg}</SpanStyled>}
      </DivSpanStyled>
    </DivWrapper>
  );
};

Input.propTypes = {                 // <- was Input.PropTypes (wrong casing)
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  errorMsg: PropTypes.string,
};
