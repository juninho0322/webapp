import { AppWrapperStyled } from "./AppWrapper.style";
import PropTypes from 'prop-types';
import {Container, Row, Col} from "react-grid-system";

export const AppWrapper = ({ children }) => (
  <Container fluid>
    <Row>
        {children}
    </Row>
  </Container>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

