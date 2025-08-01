import PropTypes from "prop-types";
import { NavbarItemStyled } from "./NavbarItem.style";
import { Icon } from '../Icon/Icon';

export const NavbarItem = ({ to, children, icon }) => (

    <NavbarItemStyled to={to}>
      <Icon icon={icon} />
      {children}
    </NavbarItemStyled>

);

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node
};
