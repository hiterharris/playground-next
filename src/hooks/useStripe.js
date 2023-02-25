import { loadStripe } from "@stripe/stripe-js";

const useStripe = () => {
    const checkout = async ({lineItems}) => {
        let stripePromise = null

        const getStripe = () => {
            if(!stripePromise) {
                stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
            }
            return stripePromise
        }

        const stripe = await getStripe()

        await stripe.redirectToCheckout({
            mode: 'payment',
            lineItems,
            successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: window.location.origin
        })
    }

    return { checkout }
}

export default useStripe;