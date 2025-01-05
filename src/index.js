import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/menu";

import "./index.css";

function App() {
  console.log(process.env.NODE_ENV);
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
