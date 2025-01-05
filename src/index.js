import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// const pizzaData = [
//   {
//     id: 1,
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     id: 2,
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     id: 3,
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     id: 4,
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     id: 5,
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     id: 6,
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  let [remotePizzas, setRemotePizzas] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_PIZZA_API_URL)
      .then((res) => res.json())
      .then((res) => {
        setRemotePizzas(res);
        console.log(res);
      });
  }, []);
  return (
    <main className="menu">
      <h1>Our menu</h1>
      {remotePizzas.map((p) => (
        <Pizza
          key={p.id}
          name={p.name}
          ingredients={p.ingredients}
          photoName={p.photoName}
          price={p.price}
        />
      ))}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  const message = isOpen ? "We're currently open!" : "We're currently closed";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} {message}
    </footer>
  );
}

function Pizza(props) {
  function buyPizza() {
    alert(`Go to payment for ${props.name}`);
  }
  return (
    <div className="pizza">
      <img src={props.photoName} alt="pizza" />
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.price + 1000}</span>
      <button onClick={buyPizza}>Buy</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
