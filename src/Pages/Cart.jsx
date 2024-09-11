import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmptyCart, removeFromCart, addToCart } from "../Redux/Slice/CartSlice";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.CartSlice);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length > 0) {
      setTotal(
        cart
          .map((product) => product.totalPrice || 0)
          .reduce((p1, p2) => p1 + p2, 0)
      );
    } else {
      setTotal(0);
    }
  }, [cart]);

  const incrementQuantity = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(addToCart({ ...product, quantity: -1 }));
    }
  };

  return (
    <div className="container">
      {cart.length > 0 ? (
        <div className="row mt-5">
          <div className="col-lg-8 me-5  rounded">
            <table className="table table-container shadow p-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}  >
                    <td>{index + 1}</td>
                    <td>
                      <img width={100} src={product?.thumbnail} alt="image" />
                    </td>
                    <td>{product?.title}</td>
                    <td>{product.totalPrice}</td>
                    <td className="text-center">
                      <div className="quantity-controls d-flex align-items-center justify-content-center">
                        <button
                          className="quantity-btn"
                          onClick={() => decrementQuantity(product)}
                        >
                          -
                        </button>
                        <div className="quantity-display mx-2">
                          {product.quantity}
                        </div>
                        <button
                          className="quantity-btn"
                          onClick={() => incrementQuantity(product)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      <i
                        className="fa-solid fa-trash text-danger"
                        onClick={() => dispatch(removeFromCart(product?.id))}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-3 ms-5 p-3 bg-secondary rounded">
            <div className="container rounded shadow p-3 w-100">
              <h2>Cart Summary</h2>
              <h4>
                Total Products: <span>{cart?.length}</span>
              </h4>
              <h5>
                Total Amount: <span className="text-success">${total}</span>
              </h5>
            </div>
            <div className="d-grid">
              <button className="btn btn-success m-3 rounded">Checkout</button>
            </div>
          </div>
          <div className="float-end m-5">
            <button
              className="btn btn-outline-warning mx-4"
              onClick={() => dispatch(EmptyCart())}
            >
              Empty Cart
            </button>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button className="btn btn-outline-primary">Shop More</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-light text-center">Your Cart is Empty</h1>
            <img
              src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
