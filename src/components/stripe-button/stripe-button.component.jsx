import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/ssfw.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = "pk_test_lPEhVHO4X06rAn5iDsunzkXw00iSIcjl5z";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Stoneburner Software, LLC"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
