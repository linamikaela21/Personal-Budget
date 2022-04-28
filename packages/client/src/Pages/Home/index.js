import { Container } from "react-bootstrap";
import { Header } from "../../Components/Header";
import { useSelector } from "react-redux";
import { LandingPage } from "../../Components/Lading";
import { Operations } from "../../Components/Operations";

export const Home = () => {
    const token = useSelector((state) => state.token);
  return (
    <Container
      fluid
    >
        <Header />
        {token ? <Operations /> : <LandingPage />}
    </Container>
  );
};