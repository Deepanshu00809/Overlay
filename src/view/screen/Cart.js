import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cloths } from "../data/data";

const Cart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    window.alert("Item added to cart.");
  };

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (product) => {
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.id !== product.id
    );
    setSelectedProducts(updatedProducts);
    window.alert("Item removed from cart.");
  };

  // Calculate the total price of all selected products
  const totalPrice = selectedProducts.reduce((acc, curr) => {
    // Check if price is defined and a number, else use 0
    return typeof curr.price === "number" ? acc + curr.price : acc;
  }, 0);

  return (
    <div className="container my-5">
      <h1 className="mb-3">Add to Cart</h1>
      <div className="row">
        {/* Product Selection */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Select Products</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {Cloths.map((product) => (
                  <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Category: {product.category}</p>
                        {/* Use a default value if price is undefined */}
                        <p className="card-text">Price: ${product.price || 0}</p>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cart Display */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Cart</h5>
            </div>
            <div className="card-body">
              {selectedProducts.length > 0 ? (
                <ul className="list-group">
                  {selectedProducts.map((product) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      {product.name} - ${product.price || 0}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price: ${totalPrice}
                  </li>
                </ul>
              ) : (
                <p>No items in cart</p>
              )}
            </div>
            <div className="card-footer">
              <Link
                to={{
                  pathname: "/payment",
                  search: `?totalPrice=${totalPrice}`,
                  state: { selectedProducts },
                }}
                className="btn btn-primary"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
