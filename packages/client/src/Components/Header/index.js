import { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { MyModal } from "../Share/myModal";

export const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-5"
      data-testid="test-id-header"
    >
      <Container fluid className="d-flex justify-content-evenly p-2">
        <Navbar.Brand href="/" className="fw-bolder fs-3">
          <FaMoneyBillWave size={40} className="m-3 mb-3" />
          Personal Budget
        </Navbar.Brand>
        <Button onClick={() => setModalShow(true)}>
          Add Operation
          <GiSaveArrow size={32} className="m-2 mb-3" />
        </Button>
        <MyModal show={modalShow} onHide={() => setModalShow(false)} />
        <Button>Add Operation</Button>
      </Container>
    </Navbar>
  );
};
