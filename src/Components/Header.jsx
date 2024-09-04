import React from "react";

import { Container, Badge, Button, Navbar, Nav, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="mx-5 fw-bold">
            <i class="fa-solid fa-truck-fast fa-bounce mx-3"></i>E-Cart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="  ms-auto my-2 my-lg-0 gap-5 mx-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fw-bold btn-outline-dark">
                <Link
                  to={"/wishlist"}
                  style={{ textDecoration: "none" }}
                  className="text-danger"
                >
                  <i class="fa-solid fa-heart mx-2 text-danger"></i>Wishlist
                </Link>
                <Badge bg="success rounded ms-2">0</Badge>
              </Nav.Link>

              <Nav.Link className="fw-bold btn-outline-dark">
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none" }}
                  className="text-primary"
                >
                  <i class="fa-solid fa-cart-shopping mx-2 text-primary"></i>{" "}
                  Cart
                </Link>
                <Badge bg="success rounded ms-2">0</Badge>
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
