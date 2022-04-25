import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { deleteOperation } from "../../../Redux/actions/operationsActions";

export const CardBox = ({ operation }) => {
  const dispatch = useDispatch();

  const deleteOp = (id) => {
    dispatch(deleteOperation(id));
    window.location.reload();
  };

  return (
    <Card border={operation.type === "income" ? "success" : "danger"}>
      <Card.Header
        className={`${
          operation.type === "income" ? "bg-success" : "bg-danger"
        } d-flex justify-content-around text-capitalize`}
      >
        <h5 className="fw-bold text-center">
          {operation.category.toUpperCase()} {operation.type.toUpperCase()}
        </h5>
      </Card.Header>
      <Card.Body>
        <Card.Title className="d-flex justify-content-around text-capitalize">
          <h5>{operation.concept}</h5>
          <h5>
            {operation.type === "income"
              ? `$ ${operation.amount}`
              : `- $ ${operation.amount}`}
          </h5>
          <Button
            variant="danger text-capitalize"
            onClick={() => deleteOp(operation._id)}
          >
            x
          </Button>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        {operation.date}
      </Card.Footer>
    </Card>
  );
};
