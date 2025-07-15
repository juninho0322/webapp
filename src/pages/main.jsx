import Title from "../components/Title";
import { Container, Row, Col } from "react-grid-system";

export const Main = () => (
  <Container fluid>
    <Row >
      <Col sm={12}>
        <Title>Reports</Title>
      </Col>
    </Row>
    <Row>
      <Col sm={4}>
        <Title>Time Frame</Title>
      </Col>
      <Col sm={4}>
        <Title>People</Title>
      </Col>
      <Col sm={4}>
        <Title>Topic</Title>
      </Col>
    </Row>
    <Row >
      <Col sm={6}>
        <Title>Figs</Title>
        <p>Content</p>
      </Col>
      <Col sm={6}>
        <Title>Charts</Title>
        <p>Content</p>
      </Col>
    </Row>
    <Row >
      <Col sm={6}>
        <Title>Weakest Topics</Title>
        <p>Content</p>
      </Col>
      <Col sm={6}>
        <Title>Strongest Topics</Title>
        <p>Content</p>
      </Col>
    </Row>
    <Row >
      <Col sm={6}>
        <Title>User Leaderboard</Title>
        <p>Content</p>
      </Col>
      <Col sm={6}>
        <Title>Groups Leaderboard</Title>
        <p>Content</p>
      </Col>
    </Row>

  </Container>

);



