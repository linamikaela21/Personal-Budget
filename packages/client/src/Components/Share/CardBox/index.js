import React from "react";
import { Card } from "react-bootstrap";

export const CardBox = ({ operation }) => {
  return (
    <Card border={operation.category === "income" ? "success" : "danger"}>
      <Card.Header
        className={operation.category === "income" ? "bg-success" : "bg-danger"}
      >
        <h5 className="fw-bold text-center">
          {operation.category.toUpperCase()}
        </h5>
      </Card.Header>
      <Card.Body>
        <Card.Title className="d-flex justify-content-around">
          <h5>{operation.concept}</h5>
          <h5>
            {operation.category === "income"
              ? `$ ${operation.amount}`
              : `- $ ${operation.amount}`}
          </h5>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
