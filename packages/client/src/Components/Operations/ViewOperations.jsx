import React from "react";
import PropTypes from "prop-types";
import { Row, Container } from "react-bootstrap";
import { CardBox } from "../Share/CardBox";
import { Pag } from "../Share/Pagination";

export const ViewOperations = ({
  operations,
  setCurrentPage,
  currentPage = 1,
  itemsPerPage = 10,
}) => {
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = operations.slice(indexFirstItem, indexLastItem);

  const paginationCallback = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container data-testid="test-id-view-operations bg-dark" className="w-100">
      <Row className="d-block" style={{ paddingLeft: "20%" }}>
        {currentItems?.map((op) => {
          return (
            <Row xs={1} md={1} lg={1} key={op._id} className="w-75 m-2">
              <CardBox operation={op} />
            </Row>
          );
        })}
      </Row>
      <Pag
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        allItems={operations.length}
        paginationCallback={paginationCallback}
      />
    </Container>
  );
};

ViewOperations.propTypes = {
  operations: PropTypes.array,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
};
