import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
function App() {
  let productArr = [
    { id: 1001, title: "shoes", price: 10,stock: 3 },
    { id: 1002, title: "jacket", price: 20,stock: 4 },
    { id: 1003, title: "watch", price: 50,stock: 5 },
  ];
  return (
    <div>
      <Header />

      {productArr.map((product,id) => (
        <Card key={product.id} title={product.title} price={product.price} stock={product.stock} />
      ))}

      <Footer />
    </div>
  );
}
export default App;
