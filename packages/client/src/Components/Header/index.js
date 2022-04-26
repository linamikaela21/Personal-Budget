import { Navbar, Container, Button } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { Filter } from "../Share/Filter";
import { MyModal } from "../Share/myModal";

export const Header = ({ setModalShow, modalShow, setUpdate, setCurrentPage }) => {
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
        <Button
          onClick={() => {
            setModalShow(true);
            setUpdate(false);
          }}
        >
          Add Operation
          <GiSaveArrow size={32} className="m-2 mb-3" />
        </Button>
        <MyModal show={modalShow} setModalShow={setModalShow} />
        <Filter setCurrentPage={setCurrentPage} />
      </Container>
    </Navbar>
  );
};
