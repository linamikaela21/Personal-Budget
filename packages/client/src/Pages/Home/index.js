import { useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Header } from "../../Components/Header";
import { LandingPage } from "../../Components/Lading";
import { Operations } from "../../Components/Operations";

export const Home = () => {
  const token = useSelector((state) => state.token);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <Container fluid>
      <Header
        modalShow={modalShow}
        setModalShow={setModalShow}
        setCurrentPage={setCurrentPage}
      />
      {token ? (
        <Operations
          modalShow={modalShow}
          setModalShow={setModalShow}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : (
        <LandingPage />
      )}
    </Container>
  );
};
