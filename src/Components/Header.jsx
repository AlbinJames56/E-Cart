import React, { useEffect, useState } from "react";
import { Container, Badge , Navbar, Nav  } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
 
function Header() {
  // wishlist count
  const [wishlistCount,setWishListCount]=useState(0);
  const wishlist = useSelector((state) => state.WishListSlice.wishlist);

  // cart count
  const [cartCount,setCartCount]=useState(0);
  const cart=useSelector((state)=>state.CartSlice);
 
  
  useEffect(()=>{
    setWishListCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="mx-5 fw-bold">
            <Link  to={"/"}
                  style={{ textDecoration: "none" }}
                  ><i className="fa-solid fa-truck-fast fa-bounce mx-3"></i>E-Cart
            </Link>
            
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
                  <i className="fa-solid fa-heart mx-2 text-danger"></i>Wishlist
                </Link>
                <Badge bg="success rounded ms-2">{wishlistCount}</Badge>
              </Nav.Link>

              <Nav.Link className="fw-bold btn-outline-dark">
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none" }}
                  className="text-primary"
                >
                  <i className="fa-solid fa-cart-shopping mx-2 text-primary"></i>{" "}
                  Cart
                </Link>
                <Badge bg="success rounded ms-2">{cartCount}</Badge>
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
