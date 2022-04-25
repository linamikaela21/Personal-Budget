import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MyForm } from "../myForm";

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
          Add Operation
        </Modal.Title>
      <Button className="bg-danger" onClick={props.onHide}>x</Button>
      </Modal.Header>
      <Modal.Body>
        <MyForm onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
};
