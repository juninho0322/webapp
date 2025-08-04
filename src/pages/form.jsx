import { Row, Col } from "react-grid-system";
import Title from "../components/Title";
import Text from "../components/Text";
import Divider from "../components/Divider";
import Input from "../components/Input"
// import { useEffect, useState } from "react";
// import fakeApi from "../../data/api";




export const Form = () => {

  // useEffect( async () => {
  //   const test = await fakeApi();
  //   console.log(test);
  // }, [] );


  return (
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
              <Input label="Street"/>
            </Col>
            <Col md={4}>
              <Input label="City"/>
            </Col>
            <Col md={4}>
              <Input label="Postcode"/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider/>
      <Row align="center">
        <Col lg={2}>
          <Title>Contact</Title>
          <Text size="small">Phone and email</Text>
        </Col>
        <Col lg={10}>
         <Row>
            <Col md={6}>
              <Input label="Email" type="email"/>
            </Col>
            <Col md={6}>
              <Input label="Phone" type="tel"/>
            </Col>
            <Col md={12}>
              <Input label="Leave us a message"/>
            </Col>
          </Row>
        </Col>
      </Row>
    <Divider/>
    </form>
  </Col>
);
}


