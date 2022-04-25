import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';

export const ViewOperations = ({
  operations,
}) => {
  return (
    <Container data-testid="test-id-view-operations">
        <Row xs={1} md={2} lg={4}>
          {operations?.map((op) => {
            return (
<h1 key={op._id} >{op.concept}</h1>
            );
          })}
        </Row>
    </Container>
  );
};

ViewOperations.propTypes = {
  operations: PropTypes.array,
};
