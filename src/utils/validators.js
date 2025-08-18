

//validate name
export function validateName(value) {
  const trimmed = value.trim();
  const isValid = trimmed.length >= 3;
   return {
    isValid,trimmed
   }
}

//validate middle and surname
export function validateSurname(value) {
  const trimmed = value.trim();
  const minLengthValid = trimmed.length >= 5;
  const lettersOnlyValid = /^[A-Za-z\s]+$/.test(trimmed);
  const isValid = minLengthValid && lettersOnlyValid;

  return {
    trimmed, isValid, minLengthValid, lettersOnlyValid
  }

}
