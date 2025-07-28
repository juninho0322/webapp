import PropTypes from "prop-types";
import { IconStyled } from "./Icon.style";

export const Icon = ({ icon, marginright, marginleft }) => (
  <IconStyled icon={icon} $marginright={marginright} $marginleft={marginleft}/>
);

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  marginright: PropTypes.string,
  marginleft: PropTypes.string,
};
