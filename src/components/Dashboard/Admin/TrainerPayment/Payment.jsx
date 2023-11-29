import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Shared/SectionTitle";
import Container from "../../../Shared/Container/Container";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const trainer = useLoaderData();
  //   console.log(trainer.data);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  return (
    <Container>
      <div className='mt-10'>
        <div>
          <SectionTitle heading='Trainers Monthly Payment'></SectionTitle>
        </div>
        <div className='mt-10'>
          <Elements stripe={stripePromise}>
            <CheckoutForm trainer={trainer?.data}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
