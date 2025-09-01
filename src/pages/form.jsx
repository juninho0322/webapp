import { Row, Col } from "react-grid-system";
import Title from "../components/Title";
import Text from "../components/Text";
import Divider from "../components/Divider";
import Input from "../components/Input"
import { useState } from "react";
import { validateName, validateSurname } from "../utils/validators"
import { ColStyled } from "../components/Input/Input.style";
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


function changeHandler(e) {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === 'name') {
    const { isValid, trimmed } = validateName(value);

  setValidation((prev) => {
    console.log(prev);
    console.log(name, value, isValid);
    return {...prev,
    [name]: trimmed === '' ? null : isValid,
  }});


  setErrors((prev) => ({
    ...prev,
    [name]:
      trimmed === ''
        ? ''
        : !isValid
        ? 'Name must be at least 3 characters'
        : '',
  }));


  } else if (name === 'middle' || name === 'surname') {

    const { isValid, trimmed, minLengthValid, lettersOnlyValid } = validateSurname(value);

    setValidation((prev) => {
     console.log(prev);
     console.log(name, trimmed, isValid);
    return {
      ...prev,
    [name]: trimmed === '' ? null : isValid,
    }

  });

  setErrors((prev) => ({
    ...prev,
    [name]:
      trimmed === ''
        ? ''
        : !minLengthValid
        ? 'Surname must be at least 5 characters'
        : !lettersOnlyValid
        ? 'Surname must contain only letters'
        : '',
  }));
  }
}


  function submitHandler(e){
    e.preventDefault();
    props.onSubmit({firstName: formData.name});
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
        <ColStyled lg={2}>
          <Title>Client</Title>
          <Text size="small">Fields for client</Text>
        </ColStyled>
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
              <Input
                label="Surname"
                name="surname"
                value={formData.surname}
                onChange={changeHandler}
                isValid={validation.surname}
                errorMsg={errors.surname}
                />
            </Col>
          </Row>
        </Col>
      </Row>
    <Divider/>

      <Row align="center">
        <ColStyled lg={2}>
          <Title>Address</Title>
          <Text size="small">Fields for address</Text>
        </ColStyled>
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
        <ColStyled lg={2}>
          <Title>Contact</Title>
          <Text size="small">Fields for contact</Text>
        </ColStyled>
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
        <ColStyled lg={2}>
          <Title>Message</Title>
          <Text size="small">Leave us a message</Text>
        </ColStyled>
        <Col lg={10}>
         <Row>
            <Col md={12}>
              <Input label="Leave us a message"/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider/>
      <button type="submit">Submit</button>
    </form>
  </Col>
);
}


