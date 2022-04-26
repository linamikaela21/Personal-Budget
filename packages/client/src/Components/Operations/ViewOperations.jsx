import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Container } from "react-bootstrap";
import { CardBox } from "../Share/CardBox";
import { Pag } from "../Share/Pagination";

export const ViewOperations = ({
  operations,
  setCurrentPage,
  setModalShow,
  modalShow,
  update,
  setUpdate,
  currentPage = 1,
  itemsPerPage = 10,
}) => {
  const [total, setTotal] = useState(0);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = operations.slice(indexFirstItem, indexLastItem);

  const paginationCallback = (pageNumber) => setCurrentPage(pageNumber);
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    setTotal(
      currentItems.reduce(
        (accQuantity, operation) =>
          accQuantity +
          (operation.type === "income" ? operation.amount : -operation.amount),
        0
      )
    );
  }, [currentItems]);

  return (
    <Container data-testid="test-id-view-operations bg-dark" className="w-100">
      <Row className="d-block" style={{ paddingLeft: "20%" }}>
        {currentItems?.map((op) => {
          return (
            <Row xs={1} md={1} lg={1} key={op._id} className="w-75 m-2">
              <CardBox
                operation={op}
                modalShow={modalShow}
                setModalShow={setModalShow}
                update={update}
                setUpdate={setUpdate}
              />
            </Row>
          );
        })}
      </Row>
      <Row className="d-flex justify-content-center align-items-center bg-light">
        <h1> Total: {formatter.format(total)}</h1>
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
