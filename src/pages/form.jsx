import { Row, Col } from "react-grid-system";
import Title from "../components/Title";
import Text from "../components/Text";
import Divider from "../components/Divider";
import Input from "../components/Input"




export const Form = () =>
(
  <Col>
    <form>
      <Row align="center">
        <Col lg={2}>
          <Title>Client</Title>
          <Text size="small">Fields for client</Text>
        </Col>
        <Col lg={10}>
          <Row>
            <Col md={4}>
              <Input label="Name"/>
            </Col>
            <Col md={4}>
              <Input label="Middle"/>
            </Col>
            <Col md={4}>
              <Input label="Surname"/>
            </Col>
          </Row>
        </Col>
      </Row>
    <Divider/>

      <Row align="center">
        <Col lg={2}>
          <Title>Address</Title>
          <Text size="small">Fields for address</Text>
        </Col>
        <Col lg={10}>
          <Row>
            <Col md={4}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    <Divider/>
    </form>
  </Col>

);


