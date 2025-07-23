import { TextStyled } from "./Text.style";


export const Text = ({children, size, align, color}) => (
  <TextStyled $size={size} $align={align} $color={color}>
    {children}
  </TextStyled>
);
