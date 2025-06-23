import PropTypes from "prop-types";

const Navbar = ({ children }) => (
  <div className='menu'>
    {children}
  </div>
);
Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;