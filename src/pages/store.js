import Image from 'next/image';
import { products } from "../constants"
import { useStripe } from '../hooks';

const Store = () => {
    const { checkout } = useStripe();
    return (
        <main className="store">
            <h1>Products</h1>
            <div className="products-container">
                {products.map(product => {
                    return (
                        <div className="product-card">
                            <Image src={product.image} className="product-image" alt="product image"/>
                            <p className="product-price">{product.price}</p>
                            <button className="product-buy-button button" onClick={(() => {checkout(product.details)})}>BUY!</button>
                        </div>
                    )
                })}
            </div>
        </main>
    )
  }
  
  export default Store;