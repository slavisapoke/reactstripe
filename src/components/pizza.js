import { useState } from "react";
import PaymentWrapper from "./payment-wrapper";

export default function Pizza(props) {
  const [goToPayment, setGoToPayment] = useState(false);

  function buyPizza() {
    setGoToPayment(true);
  }
  if (!goToPayment) {
    return (
      <div className="pizza">
        <img src={props.photoName} alt="pizza" />
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
        <span>{props.price + 1000}</span>
        <button onClick={buyPizza}>Buy</button>
      </div>
    );
  } else {
    return <PaymentWrapper />;
  }
}
