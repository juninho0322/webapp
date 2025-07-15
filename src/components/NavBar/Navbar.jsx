import { NavbarStyled } from "./Navbar.style";
import PropTypes from "prop-types";

const Navbar = ({ children }) => (
  <NavbarStyled>
    {children}
  </NavbarStyled>
);
Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
