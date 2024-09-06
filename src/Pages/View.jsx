import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Card";
import {   useSelector } from "react-redux";
import { fetchProductData } from "../Redux/Slice/ProductSlice";
import { useParams } from "react-router-dom";
function View() { 
  const { id } = useParams();

  const { loading } = useSelector(
    (state) => state.ProductSlice
  );
  const [product, setProduct] = useState({});
  useEffect(() => {
    const products=JSON.parse(localStorage.getItem("products"))
    setProduct(products.find((product) => product.id == id));
  });
  

  return (
    <div className="m-5">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="warning" />
          Loading...
        </div>
      ) : (
        <div className="container row mt-5 p-5 bg-secondary rounded">
          <div className="col-lg-5">
            <img style={{ height: "400px" }} src={product?.thumbnail} alt="" />
          </div>

          <div className="col-lg-6 ms-4">
            <p>Pid:{id}</p>
            <h1>{product?.title}</h1>
            <h5>
              Price <span>${product?.price}</span>
            </h5>
            <p>{product?.description}</p>
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
      )}
    </div>
  );
}

export default View;
