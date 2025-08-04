import { NavbarStyled } from "./Navbar.style";
import PropTypes from "prop-types";
import { NavbarItem } from "./NavbarItem/NavbarItem"

const Navbar = ({ children }) => (
  <NavbarStyled>
    {children}
  </NavbarStyled>
);
Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

Navbar.NavbarItem = NavbarItem

export default Navbar;
