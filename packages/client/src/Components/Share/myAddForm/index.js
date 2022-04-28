import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { addOperation } from "../../../Redux/actions/operationsActions";

export const MyAddForm = ({ onHide }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const schema = yup.object().shape({
    concept: yup
      .string("Concept should be a frase")
      .required("Concept is required"),
    amount: yup
      .number("Amount should be a number")
      .required("Amount is required")
      .min(1)
      .max(1000000),
    category: yup
      .string("Category should be a frase")
      .required("Category is required"),
    type: yup
      .string("Type should be a income or outflow")
      .required("Type is required"),
  });


  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const data = { userEmail: user.email, ...values };
        dispatch(addOperation(data));
        resetForm();
        setSubmitting(false);
        window.location.reload()
      }}
      initialValues={{
        concept: "",
        amount: "",
        category: "",
        type: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Concept
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Concept"
                size="lg"
                name="concept"
                value={values.concept}
                onChange={handleChange}
                isInvalid={!!errors.concept}
                errors={errors.concept}
                onBlur={handleBlur}
              />
              {touched.concept && errors.concept ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.concept}
                </div>
              ) : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Amount
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Amount"
                size="lg"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                isInvalid={!!errors.amount}
                errors={errors.amount}
                onBlur={handleBlur}
              />
              {touched.amount && errors.amount ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.amount}
                </div>
              ) : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                type="text"
                placeholder="Category"
                size="lg"
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
                errors={errors.category}
                onBlur={handleBlur}
              />
              {touched.category && errors.category ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.category}
                </div>
              ) : null}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Type
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                size="lg"
                required
                type="radio"
                name="type"
                value={values.type}
                onChange={handleChange}
                isInvalid={!!errors.type}
                errors={errors.type}
                onBlur={handleBlur}
              >
                <option
                  name="outflow"
                  value="outflow"
                  defaultValue={values.type}
                  className="w-100"
                >
                  Outflow
                </option>
                <option name="income" value="income" className="w-100">
                  Income
                </option>
              </Form.Control>
              {touched.type && errors.type ? (
                <div className="bg-danger text-white p-2 mt-1">
                  {errors.type}
                </div>
              ) : null}
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-center align-items-center">
            <Button
              size="lg"
              type="submit"
              onClick={isSubmitting ? null : onHide}
              disabled={isSubmitting}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
