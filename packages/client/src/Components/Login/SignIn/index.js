import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { signIn } from "../../../Redux/actions/userActions";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSchema = yup.object().shape({
    email: yup.string().email('It should be a valid E-mail').required('E-mail is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        dispatch(signIn(values));
        resetForm();
        setSubmitting(false);
        navigate("/");
      }}
      initialValues={{
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
              Sign In
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
