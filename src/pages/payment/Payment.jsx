import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";
import { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51QC1uEI8sInWbbt4ioMAiWk6J5onxQJbFJWRxTwUuuwcdYqEB2HrL19jwHHpSoKwkxrMEbrU5bWW3dJrxeykXZin00IBQiRiOw"
  );

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const testRequest = async () => {
      try {
        const { data } = await axios.post("http://localhost:5000/paymentStripe", {
          price: 100,
        });

        // Set the clientSecret from the backend
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching clientSecret:", error.message);
      }
    };
    testRequest();
  }, []);

  // Show loading while clientSecret is not available
  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-32">
      <div className="max-w-lg mx-auto p-4">
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutPage clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
