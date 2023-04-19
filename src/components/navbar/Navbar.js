import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { ChevronDoubleRight, ChevronDoubleLeft } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <Navbar bg="white" className="shadow-sm fixed-top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Admin</Navbar.Brand>

        <div className="btn-slide navbar-toggler me-auto">
          <ChevronDoubleRight className="open" />
          <ChevronDoubleLeft className="close d-none" />
        </div>

        <Navbar.Toggle aria-controls="navbarContent">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarContent" className="my-3 my-lg-0">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search..."
              className="mx-lg-2"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
