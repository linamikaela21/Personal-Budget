import React from "react";
import PropTypes from "prop-types";
import { Pagination, Col, Row } from "react-bootstrap";

export const Pag = ({
  itemsPerPage,
  allItems,
  paginationCallback,
  currentPage = 1,
}) => {
  const pageNumbers = [];

  for (let number = 1; number < Math.ceil(allItems / itemsPerPage); number++) {
    pageNumbers.push(number);
  }

  return (
    <Row
      lg={3}
      className="d-flex justify-content-center align-items-center p-4"
      data-testid="test-id-pagination"
    >
      {pageNumbers?.map((number) => (
        <Col lg={1} key={number}>
          <Pagination size="lg" onClick={() => paginationCallback(number)}>
            <Pagination.Item className="border rounded border-primary">
              {number}
            </Pagination.Item>
          </Pagination>
        </Col>
      ))}
    </Row>
  );
};

Pag.propTypes = {
  itemsPerPage: PropTypes.number,
  pagination: PropTypes.func,
  allItems: PropTypes.number,
  operations: PropTypes.array,
  currentPage: PropTypes.number,
};
