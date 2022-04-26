import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MyAddForm } from "../myAddForm";
import { MyUpdateForm } from "../myUpdateForm";

export const MyModal = (props) => {
  const closeModal = () => {
    props.onHide(false);
    props.setUpdate(false);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.update ? "Update Operation" : "Add Operation"}
        </Modal.Title>
        <Button className="bg-danger" onClick={props.onHide}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        {props.update ? (
          <MyUpdateForm
            onHide={closeModal}
            operationId={props.operation._id}
            operationAmount={props.operation.amount}
            operationCategory={props.operation.category}
            operationConcept={props.operation.concept}
            operationType={props.operation.type}
          />
        ) : (
          <MyAddForm onHide={closeModal} />
        )}
      </Modal.Body>
    </Modal>
  );
};
