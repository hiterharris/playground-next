import Image from 'next/image';
import { iPhone14, macbookPro } from "../assets";
import Link from "next/link";

const Stripe = () => {
    return (
        <main className="store">
            <h1>Products</h1>
            <div className="products-container">
                <div className="product-card">
                    <h2>iPhone</h2>
                    <Image src={iPhone14} className="product-image" alt="product image"/>
                    <p className="product-price">$1,099</p>
                    <Link href="/payment">
                        <button className="product-buy-button">Buy</button>
                    </Link>
                </div>
                <div className="product-card">
                    <h2>Macbook Pro</h2>
                    <Image src={macbookPro} className="product-image" alt="product image"/>
                    <p className="product-price">$2,499</p>
                    <Link href="/payment">
                        <button className="product-buy-button">Buy</button>
                    </Link>
                </div>
            </div>
        </main>
    )
  }
  
  export default Stripe;