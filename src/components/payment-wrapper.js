import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout";
import { loadStripe } from "@stripe/stripe-js";

export default function PaymentWrapper() {
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
