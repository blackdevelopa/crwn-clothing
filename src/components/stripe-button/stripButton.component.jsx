import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_16oGhEecivSAT3NmEjwoJNtu00hUXSE272";

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }


  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN CLOTHING LTD"
      billingAddress
      shippingAddress
      image=""
      description={`Your Price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;