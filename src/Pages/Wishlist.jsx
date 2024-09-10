import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromList } from "../Redux/Slice/WishListSlice";
// import { removeFromList } from "../Redux/Slice/WishListSlice";

function Wishlist() { 
  const wishlist = useSelector((state) => state.WishListSlice.wishlist);
   const dispatch=useDispatch();
  const handleRemove=(productId)=>{
    dispatch(removeFromList(productId))
    alert("Item Removed From Wishlist")
  }
  return (
    <div className="container mt-5">
      <Row className="mt-5 container">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <Col className="mt-5" sm={12} md={6} xl={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Link>
                    <Card.Img variant="top" src={product?.thumbnail} />
                  </Link>
                  <Card.Text>{product?.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button className="btn btn-primary ">
                      <i class="fa-solid fa-cart-shopping mx-2"></i>{" "}
                    </Button>
                    <Button
                      className="btn btn-danger "
                      onClick={()=>handleRemove(product.id)}
                    >
                      <i class="fa-solid fa-heart-circle-minus mx-2"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="text-light text-center">Your Wishlist is Empty</h1>
            <img
              src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
              alt=""
            />
            </div>
            
          </div>
        )}
      </Row>
    </div>
  );
}

export default Wishlist;
