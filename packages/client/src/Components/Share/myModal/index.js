import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MyAddForm } from "../myAddForm";
import { MyUpdateForm } from "../myUpdateForm";

export const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.operation ? "Update Operation" : "Add Operation"}
        </Modal.Title>
        <Button className="bg-danger" onClick={props.onHide}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        {props.operation ? (
          <MyUpdateForm
            onHide={props.onHide}
            operation={props.operation}
          />
        ) : (
          <MyAddForm onHide={props.onHide} />
        )}
      </Modal.Body>
    </Modal>
  );
};
