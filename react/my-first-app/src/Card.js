import React, { useState } from "react";
import "./Card.css";
import propTypes from "prop-types";
function Card({ title, price, stock }) {
  let [stockCount, setStockCount] = useState(stock);
  let prevStock = stockCount;
  function decrementStock() {
    setStockCount(--stockCount);
    console.log(stockCount);
  }
  function resetStock() {
    setStockCount(prevStock);
  }
  return (
    <div className="Card">
      <h1>{title}</h1>
      <p className="price">${price}</p>
      <p className="stock">In stock: {stockCount}</p>
      <p>
        <button onClick={decrementStock}>Add to cart</button>
      </p>
    </div>
  );
}
Card.propTypes = {
  title: propTypes.string,
  price: propTypes.number.isRequired,
  stock: propTypes.number.isRequired,
};
Card.defaultProps = {
  title: "Products",
  price: 0,
  stock: 0,
};

export default Card;
