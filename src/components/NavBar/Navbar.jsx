import { NavBarStyled } from "./NavBar.style";
import PropTypes from "prop-types";

const Navbar = ({ children }) => (
  <NavBarStyled>
    {children}
  </NavBarStyled>
);
Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
