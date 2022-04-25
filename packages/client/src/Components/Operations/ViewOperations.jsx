import React from "react";
import PropTypes from "prop-types";
import { Row, Container, Col } from "react-bootstrap";
import { CardBox } from "../Share/CardBox";

export const ViewOperations = ({ operations }) => {
  return (
    <Container
      data-testid="test-id-view-operations"
      className="w-100"
    >
      <Col className="d-block" style={{ left: "13%" }}>
        {operations?.map((op) => {
          return (
            <Row
              xs={1}
              md={1}
              lg={1}
              key={op._id}
              className="w-75 m-2"
            >
              <CardBox operation={op} />
            </Row>
          );
        })}
      </Col>
    </Container>
  );
};

ViewOperations.propTypes = {
  operations: PropTypes.array,
};
