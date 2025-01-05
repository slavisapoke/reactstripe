import { useEffect, useState } from "react";
import Pizza from "./pizza";

export default function Menu() {
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
