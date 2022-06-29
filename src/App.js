import React from "react";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { Formik, Field, useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mnumber: "",
  radio1: "",
  sname: "",
  weburl: "",
  city: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.fname) {
    errors.fname("Required");
  }
  if (!values.email) {
    errors.email("Required");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.mnnumber) {
    errors.email("Required");
  }

  return errors;
};

const validationSchema = Yup.object({
  fname: Yup.string().required("Required!"),
  lname: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email formate").required("Required!"),
  weburl: Yup.string().matches(URL, "Enter a valid url"),
  mnumber: Yup.string().phone("IN", true, "enter valid number").required(),
});

const App = () => {
  //formik hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // console.log("form errors", formik.errors);

  console.log("Visited fields", formik.touched);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>School Registration Form</h1>

        <Form
          onSubmit={formik.handleSubmit}
          style={{
            backgroundColor: "#48c5fc",
            border: "1px dotted black",
            width: "80%",
            margin: "auto",
            padding: "auto",
          }}
        >
          <FormGroup row>
            <Label for="fname" sm={2} style={{ textAlign: "right" }}>
              FirstName
            </Label>
            <Col md={4}>
              <Input
                id="fname"
                name="fname"
                placeholder="Enter Your FirstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div className="errorclass">{formik.errors.fname}</div>
              ) : null}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lname" sm={2} style={{ textAlign: "right" }}>
              LastName
            </Label>
            <Col md={4}>
              <Input
                id="lname"
                name="lname"
                placeholder="Enter Your LastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
              />{" "}
              {formik.touched.lname && formik.errors.lname ? (
                <div className="errorclass">{formik.errors.lname}</div>
              ) : null}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="email" sm={2} style={{ textAlign: "right" }}>
              Email
            </Label>
            <Col md={4}>
              <Input
                id="email"
                name="email"
                placeholder="Enter Your Email ID"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorclass">{formik.errors.email}</div>
              ) : null}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="mnumber" sm={2} style={{ textAlign: "right" }}>
              Mobile Number
            </Label>
            <Col md={4}>
              <Input
                id="mnumber"
                name="mnumber"
                placeholder=" Your Mobile Number"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mnnumber}
              />
              {formik.touched.mnumber && formik.errors.mnumber ? (
                <div className="errorclass">{formik.errors.mnumber}</div>
              ) : null}
            </Col>
          </FormGroup>

          <FormGroup row tag="fieldset">
            <Label for="gender" sm={2} style={{ textAlign: "right" }}>
              Gender
            </Label>
            <Col md={4}>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  onChange={formik.handleChange}
                  value={formik.values.radio1}
                />

                <Label check>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  onChange={formik.handleChange}
                  value={formik.values.radio1}
                />

                <Label check>Female</Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="sname" sm={2} style={{ textAlign: "right" }}>
              School Name
            </Label>
            <Col md={4}>
              <Input
                id="sname"
                name="sname"
                placeholder="Enter Your School Name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.sname}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="weburl" sm={2} style={{ textAlign: "right" }}>
              Website
            </Label>
            <Col md={4}>
              <Input
                id="weburl"
                name="weburl"
                placeholder="Website "
                type="url"
                onChange={formik.handleChange}
                value={formik.values.weburl}
              />
              {formik.touched.weburl && formik.errors.weburl ? (
                <div className="errorclass">{formik.errors.weburl}</div>
              ) : null}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="city" sm={2} style={{ textAlign: "right" }}>
              City Name
            </Label>
            <Col md={4}>
              <Input
                className="mb-3"
                type="select"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              >
                <option>Vadodara</option>
                <option>Bharuch</option>
                <option>Ahemdavad</option>
                <option>Surat</option>
              </Input>
            </Col>
          </FormGroup>

          <div className="btnclass">
            <Button color="primary" outline type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default App;
