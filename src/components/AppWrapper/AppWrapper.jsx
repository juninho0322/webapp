import { AppWrapperStyled } from "./AppWrapper.style";
import PropTypes from 'prop-types';
import {Container, Row, Col} from "react-grid-system";

export const AppWrapper = ({ children }) => (
  <Container fluid>
    <Row>
      <Col sm={12}>
        <AppWrapperStyled>
          {children}
        </AppWrapperStyled>
      </Col>
    </Row>
  </Container>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

