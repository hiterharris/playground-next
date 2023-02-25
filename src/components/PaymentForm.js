import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    console.log("[PaymentMethod]", payload);
  };

  return (
    <div className="payment-form">
        <form onSubmit={handleSubmit}>
        <label>
            Card details
            <CardElement
            className="payment-form-label"
            options={options}
            onReady={() => {
                console.log("CardElement [ready]");
            }}
            onChange={event => {
                console.log("CardElement [change]", event);
            }}
            onBlur={() => {
                console.log("CardElement [blur]");
            }}
            onFocus={() => {
                console.log("CardElement [focus]");
            }}
            />
        </label>
        <button className="pay-button button" type="submit" disabled={!stripe}>
            Pay
        </button>
        </form>
    </div>
  );
};

export default PaymentForm;
