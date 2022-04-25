import React from "react";
import { useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { addOperation } from "../../../Redux/actions/operationsActions";

export const MyForm = ({ onHide }) => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    concept: yup.string().required(),
    amount: yup.number().required(),
    category: yup.string().required(),
    type: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        dispatch(addOperation(values));
        resetForm();
        setSubmitting(false);
        window.location.reload();
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
                className={
                  touched.concept && errors.concept ? "bg-danger" : null
                }
              />
              {touched.concept && errors.concept ? (
                <div className="bg-danger">{errors.concept}</div>
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
                className={touched.amount && errors.amount ? "bg-danger" : null}
              />
              {touched.amount && errors.amount ? (
                <div className="bg-danger">{errors.amount}</div>
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
                className={
                  touched.category && errors.category ? "bg-danger" : null
                }
              />
              {touched.category && errors.category ? (
                <div className="bg-danger">{errors.category}</div>
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
                className={touched.type && errors.type ? "bg-danger" : null}
              >
                <option
                  name="outflow"
                  value="outflow"
                  selected="selected"
                  className="w-100"
                >
                  Outflow
                </option>
                <option name="income" value="income">
                  Income
                </option>
              </Form.Control>
              {touched.type && errors.type ? (
                <div className="bg-danger">{errors.type}</div>
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
