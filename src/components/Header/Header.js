import React, { useContext } from "react";
import { Form, Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [user] = useContext(UserContext);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12">
          <Navbar
            className="pr-5"
            bg="dark"
            variant="dark"
            collapseOnSelect
            expand="md"
            sticky="top"
          >
            <Navbar.Brand className="pl-5 text-info">Town Trips</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Destination
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Blog
                </Link>
                <Link
                  className="pr-4 pt-1 text-light text-decoration-none"
                  to="/home"
                >
                  Contact
                </Link>
                <Form inline>
                  {user.isLoggedIn ? (
                    <h5 className="text-info">{user.email}</h5>
                  ) : (
                    <Link
                      to="/login"
                      className="text-info border border-info pl-2 pr-2 pt-1 pb-1 text-decoration-none"
                    >
                      Login
                    </Link>
                  )}
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
