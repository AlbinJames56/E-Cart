import React from "react";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 me-5 bg-secondary p-4 rounded">
            <table className="table shadow">
              <thead>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th></th>
              </thead>
              <tbody>
                <tr className="pt-4">
                  <td>1</td>
                  <td>
                    <img
                      width={100}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Horse_%26_cart%2C_Town%2C_Beamish_Museum%2C_21_November_2013_%28cropped%29.jpg/640px-Horse_%26_cart%2C_Town%2C_Beamish_Museum%2C_21_November_2013_%28cropped%29.jpg"
                      alt="image"
                    />
                  </td>
                  <td>Kuthira Vandi</td>
                  <td>190000</td>
                  <td>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-3 ms-5 p-3  bg-secondary rounded">
            <div className="container rounded shadow  p-3 w-100">
              <h2>Cart Summary</h2>
              <h4>
                Total Products: <span>5</span>
              </h4>
              <h5>
                Total Amount: <span className="text-success">$169000</span>
              </h5>
            </div>
            <div className="d-grid">
              <button className="btn btn-success m-3 rounded">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
