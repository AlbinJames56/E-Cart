import React, { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { fetchProductData } from "../Redux/Slice/ProductSlice";
import Spinner from "react-bootstrap/Spinner";
function Home() {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.ProductSlice
  ); 
  console.log(products);

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);
  return (
    <div className="container mt-5">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="warning" />
          Loading...
        </div>
      ) : (
        <Row className="mt-5 container">
          {products.length > 0 &&
            products.map((product, index) => (
              <Col key={index} className="mt-5" sm={12} md={6} xl={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
                    <Link to={`./view/${product?.id}`}  >
                      <Card.Img
                         
                        variant="top"
                        src={product?.thumbnail}
                      />
                    </Link>
                    <Card.Text>
                     {product?.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button className="btn btn-primary ">
                        <i class="fa-solid fa-cart-shopping mx-2"></i>{" "}
                      </Button>
                      <Button className="btn btn-danger ">
                        <i class="fa-solid fa-heart mx-2"></i>{" "}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
}

export default Home;
