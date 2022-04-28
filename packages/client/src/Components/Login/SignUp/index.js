import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { signUp } from "../../../Redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        dispatch(signUp(values));
        resetForm();
        setSubmitting(false);
        navigate("/");
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="w-100 m-4">
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
          <Form.Label sm="12" className="d-flex justify-content-center align-items-center">
              FirstName
            </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="FirstName"
                size="lg"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
                errors={errors.firstName}
                onBlur={handleBlur}
              />
              {touched.firstName && errors.firstName ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.firstName}
                </div>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
          <Form.Label sm="12" className="d-flex justify-content-center align-items-center">
              LastName
            </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="LastName"
                size="lg"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
                errors={errors.concept}
                onBlur={handleBlur}
              />
              {touched.lastName && errors.lastName ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.lastName}
                </div>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
          <Form.Label sm="12" className="d-flex justify-content-center align-items-center">
              E-mail
            </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="E-mail"
                size="lg"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                errors={errors.email}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.email}
                </div>
              ) : null}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
          <Form.Label sm="12" className="d-flex justify-content-center align-items-center">
              Password
            </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                size="lg"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                errors={errors.password}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.password}
                </div>
              ) : null}
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="secondary"  size="lg" type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
