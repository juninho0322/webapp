import  ClientForm  from "../components/ClientForm";
import { Row, Col } from "react-grid-system";
import { Divider } from "../components/Divider";

export const Forms = () =>
  (
    <Col sm={12}>
      <ClientForm>
        <Col sm={12} >
          <h2>Client Form</h2>
        </Col>

        <Col sm={12}>
          <form action="">
            <Row >
              <Col sm={4}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </Col>
              <Col sm={4}>
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" required />
              </Col>
              <Col sm={4}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </Col>
            </Row>
            <Divider/>
            <Row>
              <Col sm={12}>
              <label htmlFor="text">Text:</label>
              <input type="text" id="text" name="text" required />
              </Col>
             </Row>
             <Divider/>
            <Row>

              <Col sm={12}>
              <button type="submit">Submit</button>
              </Col>
            </Row>
        </form>
        </Col>
      </ClientForm>
    </Col>

  );


