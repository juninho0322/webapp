import { Row, Col } from "react-grid-system";
import Title from "../components/Title";
import Text from "../components/Text";
import Divider from "../components/Divider";
import Input from "../components/Input"
import { useState } from "react";
// import { useEffect, useState } from "react";
// import fakeApi from "../../data/api";




export const Form = (props) => {

   const [formData, setFormData] = useState({
    name: '',
    middle: '',
  });

  const [validation, setValidation] = useState({
  name: null,
  middle: null,
});

function validateMinLength(field, value, minLength = 3) {
  const isValid = value.trim().length >= minLength;
  setValidation((prev) => ({
    ...prev,
    [field]: isValid,
  }));
}

function handleNameChange(e) {
  changeHandler(e);
  validateMinLength(e.target.name, e.target.value);
}



  function changeHandler(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value)
}

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData)
    setFormData({
      name: '',
      middle: '',
    });
  }

  // useEffect( async () => {
  //   const test = await fakeApi();
  //   console.log(test);
  // }, [] );


  return (
  <Col>
       <form onSubmit={submitHandler}>
      <Row align="center">
        <Col lg={2}>
          <Title>Client</Title>
          <Text size="small">Fields for client</Text>
        </Col>
        <Col lg={10}>
          <Row>
            <Col md={4}>
              <Input label="Name" name="name" value={formData.name} onChange={handleNameChange} isValid={validation.name}/>
            </Col>
            <Col md={4}>
              <Input label="Middle" name="middle" value={formData.middle} onChange={changeHandler} isValid={true}/>
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
          <Text size="small">Fields for contact</Text>
        </Col>
        <Col lg={10}>
         <Row>
            <Col md={6}>
              <Input label="Email"/>
            </Col>
            <Col md={6}>
              <Input label="Phone"/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider/>

      <Row align="center">
        <Col lg={2}>
          <Title>Message</Title>
          <Text size="small">Leave us a message</Text>
        </Col>
        <Col lg={10}>
         <Row>
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


