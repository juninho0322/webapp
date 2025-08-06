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
    surname:'',
  });

  const [validation, setValidation] = useState({
  name: null,
  middle: null,
  surname: null,
});

const [errors, setErrors] = useState({
  name: '',
  middle: '',
  surname:'',
});


//validate name
function validateName(field, value) {
  const trimmed = value.trim();
  const isValid = trimmed.length >= 3;

  setValidation((prev) => ({
    ...prev,
    [field]: trimmed === '' ? null : isValid,
  }));

  setErrors((prev) => ({
    ...prev,
    [field]:
      trimmed === ''
        ? ''
        : !isValid
        ? 'Name must be at least 3 characters'
        : '',
  }));
}

//validate middle and surname
function validateSurname(field, value) {
  const trimmed = value.trim();
  const minLengthValid = trimmed.length >= 5;
  const lettersOnlyValid = /^[A-Za-z\s]+$/.test(trimmed);
  const isValid = minLengthValid && lettersOnlyValid;

  setValidation((prev) => ({
    ...prev,
    [field]: trimmed === '' ? null : isValid,
  }));

  setErrors((prev) => ({
    ...prev,
    [field]:
      trimmed === ''
        ? ''
        : !minLengthValid
        ? 'Surname must be at least 5 characters'
        : !lettersOnlyValid
        ? 'Surname must contain only letters'
        : '',
  }));
}



function changeHandler(e) {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === 'name') {
    validateName(name, value);
  } else if (name === 'middle' || name === 'surname') {
    validateSurname(name, value);
  }
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
              <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              isValid={validation.name}
              errorMsg={errors.name}
              />
            </Col>
            <Col md={4}>
              <Input
                label="Middle"
                name="middle"
                value={formData.middle}
                onChange={changeHandler}
                isValid={validation.middle}
                errorMsg={errors.middle}
                />
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


