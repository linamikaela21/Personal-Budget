import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Container } from "react-bootstrap";
import { CardBox } from "../Share/CardBox";
import { Pag } from "../Share/Pagination";

export const ViewOperations = ({
  operations,
  operationFiltered,
  setCurrentPage,
  setModalShow,
  modalShow,
  currentPage = 1,
  itemsPerPage = 10,
}) => {
  const [total, setTotal] = useState(0);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = operationFiltered.length ? operationFiltered.slice(indexFirstItem, indexLastItem) : operations.slice(indexFirstItem, indexLastItem);

  const paginationCallback = (pageNumber) => setCurrentPage(pageNumber);
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    setTotal(
      operations.reduce(
        (accQuantity, operation) =>
          accQuantity +
          (operation.type === "income" ? operation.amount : -operation.amount),
        0
      )
    );
  }, [operations]);

  return (
    <Container className="w-100">
      <Row className="d-block" style={{ paddingLeft: "20%" }}>
        {currentItems?.map((op) => {
          return (
            <Row xs={1} md={1} lg={1} key={op._id} className="w-75 m-2">
              <CardBox
                operation={op}
                formatter={formatter}
                modalShow={modalShow}
                setModalShow={setModalShow}
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
