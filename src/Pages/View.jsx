import React from "react";
import Button from "react-bootstrap/Card";
function View() {
  return (
    <div className="m-5">
      <div className="container row mt-5 p-5 bg-secondary rounded">
        <div className="col-lg-5">
          <img
            style={{ width: "100%", height: "400px" }}
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt=""
          />
        </div>

        <div className="col-lg-6 ms-4">
          <p>Pid:6789</p>
          <h1>Title</h1>
          <h5>
            Price <span>$50000</span>
          </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nemo
            delectus sequi temporibus veritatis, vero aut ipsa. Obcaecati
            aperiam repellendus eligendi id culpa blanditiis, aliquid assumenda
            dolorum numquam? Consequuntur, explicabo!
          </p>
          <div className="d-flex justify-content-between mt-4">
            <Button className="btn btn-outline-dark p-2">
              <i className="fa-solid fa-heart text-danger">
                {" "}
                <span className="ms-2 text-white">Add to Wishlist</span>
              </i>
            </Button>
            <Button className="btn btn-outline-light pt-2">
              <i className="fa-solid fa-cart-shopping text-primary">
                {" "}
                <span className="ms-2 text-white">Add to Cart</span>
              </i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
