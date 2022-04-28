import React from "react";
import { Container, Col, Row, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Login = () => {
  const navigate = useNavigate()
  return (
    <Container className="bg-info p-2 mt-2">
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Button variant="secondary" size="lg" type="button" className="w-25 p-2" onClick={() => navigate('/')}>Go Back</Button>
      </Row>
      <Container className="d-flex justify-content-center align-items-center p-5 mt-2">
        <Col>
          <Row className="d-flex bg-light justify-content-center align-items-center m-4">
            <h1>
              <Badge bg="info" text="light">
                Sign-In
              </Badge>
            </h1>
          </Row>
          <Row>
            <SignIn />
          </Row>
        </Col>
        <Col>
          <Row className="d-flex bg-light justify-content-center align-items-center m-4">
            <h1>
              <Badge bg="info" text="light">
                Sign-Up
              </Badge>
            </h1>
          </Row>
          <Row>
            <SignUp />
          </Row>
        </Col>
      </Container>
    </Container>
  );
};
