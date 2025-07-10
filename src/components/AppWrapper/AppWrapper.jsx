import { AppWrapperStyled } from "./AppWrapper.style";
import PropTypes from 'prop-types';

export const AppWrapper = ({ children }) => (
  <AppWrapperStyled>
    {children}
  </AppWrapperStyled>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

