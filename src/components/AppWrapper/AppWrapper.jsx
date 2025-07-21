import { AppWrapperStyled } from "./AppWrapper.style";
import PropTypes from 'prop-types';
import { Row } from "react-grid-system";

export const AppWrapper = ({ children }) => (
  <AppWrapperStyled fluid>
    <Row>
        {children}
    </Row>
  </AppWrapperStyled>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

