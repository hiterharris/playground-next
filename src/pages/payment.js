import PaymentForm from "@/components/PaymentForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    return (
        <main className="payment">
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </main>
    )
  }

  export default Checkout;