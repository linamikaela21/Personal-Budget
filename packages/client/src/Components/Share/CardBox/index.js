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
  update,
  setUpdate,
}) => {
  const dispatch = useDispatch();
  const op = useSelector((state) => state.operation);

  const deleteOp = (id) => {
    dispatch(deleteOperation(id));
    setModalShow(false);
    window.location.reload();
  };

  const updateOp = async (id) => {
    dispatch(getOperationById(id));
    setModalShow(true);
  };

  return (
    <Card border={operation.type === "income" ? "success" : "danger"}>
      <Card.Header
        className={`${
          operation.type === "income" ? "bg-success" : "bg-danger"
        } d-flex justify-content-around text-capitalize`}
      >
        <h5 className="fw-bold text-center">
          {operation.category.toUpperCase()} ({operation.type.toUpperCase()})
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
                setUpdate(true);
              }}
              update={update}
              setUpdate={setUpdate}
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
