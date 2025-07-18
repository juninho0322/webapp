import PropTypes from "prop-types";
import { IconStyled } from "./Icon.style";

export const Icon = ({ icon, color, size, margin }) => (
  <IconStyled icon={icon} color={color} size={size} margin={margin} />
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
};
