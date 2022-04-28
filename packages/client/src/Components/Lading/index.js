import { Container, Image } from "react-bootstrap";

export const LandingPage = () => {
  return (
    <Container fluid>
      <Image
        title="landingPage"
        alt="landingPage"
        src={require("../../Assets/landingImage.jpeg")}
        width="100%"
        height="550rem"
      />
    </Container>
  );
};
