import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutPage = ({ clientSecret }) => {
  console.log("clientSecret in CheckoutPage:", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!stripe || !elements) {
    console.log("Stripe.js has not loaded yet.");
    return;
  }

  // Confirm the payment
  const { error, paymentIntent } = await stripe.confirmPayment({
    elements, // Uses the PaymentElement
    confirmParams: {
    },
    redirect: 'if_required', 
  });

  if (error) {
    console.error("Payment error:", error.message);
  }

  if (paymentIntent.status === "succeeded"){
    console.log("Payment successful:", paymentIntent);

    // do something with the paymentIntent

    
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-purple-600 mt-5 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        Submit Payment
      </button>
    </form>
  );
};

export default CheckoutPage;
