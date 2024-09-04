import React from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container mt-5">
    <Row className="mt-5 container">
      <Col className="mt-5" sm={12} md={6} xl={3}>


        <Card style={{ width: "18rem" }}>
          
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Link>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Horse_%26_cart%2C_Town%2C_Beamish_Museum%2C_21_November_2013_%28cropped%29.jpg/640px-Horse_%26_cart%2C_Town%2C_Beamish_Museum%2C_21_November_2013_%28cropped%29.jpg"
            />
          </Link>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
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
    </Row>
  </div>
  );
}

export default Home;
