import '@/styles/globals.css'
import '@/styles/pageStyles.css'
import { loadStripe } from '@stripe/stripe-js';

export default function App({ Component, pageProps }) {
  const getStripe = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log(stripe)
  }

  getStripe();
  return <Component {...pageProps} />
}
