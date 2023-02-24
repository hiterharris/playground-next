import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image'
import { iPhone14, macbookPro } from "../assets"

const Stripe = () => {
    const getStripe = async () => {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        console.log(stripe)
      }
    
      getStripe();
    return (
        <main className="stripe">
          <h1>Products</h1>
          <div className="products-container">
            <div className="product-card">
                <h2>iPhone</h2>
                <Image src={iPhone14} className="product-image"/>
                <p className="product-price">$1,099</p>
                <button className="product-buy-button">Buy</button>
            </div>
            <div className="product-card">
                <h2>Macbook Pro</h2>
                <Image src={macbookPro} className="product-image"/>
                <p className="product-price">$2,499</p>
                <button className="product-buy-button">Buy</button>
            </div>
          </div>

        </main>
    )
  }
  
  export default Stripe;