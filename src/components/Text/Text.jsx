import { TextStyled } from "./Text.style";
import PropTypes from "prop-types";


export const Text = ({children, size, align, color}) => (
  <TextStyled $size={size} $align={align} $color={color}>
    {children}
  </TextStyled>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
