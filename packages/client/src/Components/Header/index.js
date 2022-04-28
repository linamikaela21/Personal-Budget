import { Navbar, Container, Button } from "react-bootstrap";
import { GiSaveArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/actions/userActions";
import { Filter } from "../Share/Filter";
import { MyModal } from "../Share/myModal";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";


export const Header = ({ setModalShow, modalShow, setCurrentPage }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-5"
      data-testid="test-id-header"
    >
      <Container fluid className="d-flex justify-content-evenly p-2 mr-5">
        <Navbar.Brand href="/" className="fw-bolder fs-3">
          <FaMoneyBillWave size={40} className="m-3 mb-3" />
          Personal Budget
        </Navbar.Brand>
        <Button
        variant="success" 
          onClick={() => {
            setTimeout(() => {
              setModalShow(true);
            }, 500);
          }}
        >
          Add Operation
          <GiSaveArrow size={28} className="m-2 mb-3" />
        </Button>
        <MyModal show={modalShow} setModalShow={setModalShow} />
        {!token ? (
          <Button variant="info" href="/login">
            Login
            <BiLogIn size={28} className="m-2 mb-3" />
          </Button>
        ) : (
          <Button variant="secondary"  href="/" onClick={() => dispatch(logOut())}>
            Logout
            <BiLogOut size={28} className="m-2 mb-3" />
          </Button>
        )}
        <div className="d-flex justify-content-center aling-items-center">
          <Filter setCurrentPage={setCurrentPage} />
        </div>
      </Container>
    </Navbar>
  );
};
