import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import {
  deleteOperation,
  getOperationById,
} from "../../../Redux/actions/operationsActions";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { MyModal } from "../myModal";

export const CardBox = ({
  operation,
  modalShow,
  setModalShow,
  arsCurrency,
}) => {
  const dispatch = useDispatch();
  const op = useSelector((state) => state.operation);

  const deleteOp = (id) => {
    dispatch(deleteOperation(id));
    setModalShow(false);
  };

  const updateOp = async (id) => {
    await dispatch(getOperationById(id));
    setTimeout(() => {
      setModalShow(true);
    }, 1000);
  };

  return (
    <Card border={operation.type === "income" ? "success" : "danger"}>
      <Card.Header
        className={`${
          operation.type === "income" ? "bg-success" : "bg-danger"
        } d-flex justify-content-around text-capitalize`}
      >
        <h5 className="fw-bold text-center text-white">
          {operation.category.toUpperCase()} ({operation.type.toUpperCase()})
        </h5>
      </Card.Header>
      <Card.Body>
        <Card.Title className="d-flex justify-content-around text-capitalize">
          <h5>{operation.concept}</h5>
          <h5>
            {operation.type === "income"
              ? `${arsCurrency(operation.amount)}`
              : `- ${arsCurrency(operation.amount)}`}
          </h5>
          <div>
            <Button
              variant="warning text-capitalize text-white mr-2"
              onClick={() => updateOp(operation._id)}
            >
              <BsPencilFill size={30} />
            </Button>
            <MyModal
              operation={op}
              show={modalShow}
              onHide={() => {
                setModalShow(false);
              }}
            />
            <Button
              variant="danger text-capitalize"
              onClick={() => deleteOp(operation._id)}
            >
              <AiFillDelete size={30} />
            </Button>
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        {operation.date}
      </Card.Footer>
    </Card>
  );
};
