import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ trainer }) => {
  const [error, setError] = useState();
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const trainerSalary = trainer.salary;
  //   console.log(trainer);

  useEffect(() => {
    if (trainerSalary > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          salary: trainerSalary,
        })
        .then(res => {
          //   console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, trainerSalary]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm Error", confirmError);
    } else {
      //   console.log("[payment-intent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
    }

    const paymentInfo = {
      email: trainer.email,
      salary: trainerSalary,
      transactionId: paymentIntent.id,
      date: new Date(),
    };
    const res = await axiosSecure.post("/trainers-payment", paymentInfo);

    if (res?.data?.paymentResult?.insertedId) {
      toast.success("Payment successful!");
    }
    navigate("/dashboard/trainers");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-extended-gold py-10 px-5 '>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#000000",
                  backgroundColor: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='mt-5 bg-extended-teal px-6 py-1 rounded-r-full text-white font-bold'
          type='submit'
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className='text-red-500 mt-2'>{error}</p>
        {transactionId && (
          <p className='text-white'>Your transaction id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
