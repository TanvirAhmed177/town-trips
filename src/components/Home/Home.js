import React from "react";
import "./Home.css";
import { Container, Row } from "react-bootstrap";
import Transport from "../Transport/Transport";
import transports from "../../fakeData/fakeData";

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="justify-content-center p-5">
        {transports.map((tr) => (
          <Transport transport={tr}></Transport>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
