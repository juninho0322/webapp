import PropTypes from "prop-types";
import { IconStyled } from "./Icon.style";

export const Icon = ({ icon, marginright }) => (
  <IconStyled icon={icon} $marginright={marginright}/>
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
};
