import { basicPlan, premiumPlan } from "../assets";

const products = [
    {
        price: 29.99,
        image: basicPlan,
        details: {
            lineItems: [
                {
                    price: "price_1Meo0ZB2W8yqr0N4TMmjyzBW",
                    quantity: 1
                },
            ]
        }
    },
    {
        price: 49.99,
        image: premiumPlan,
        details: {
            lineItems: [
                {
                    price: "price_1Mf1QvB2W8yqr0N4MG0bHqAm",
                    quantity: 1
                }
            ]
        } 
    }
];

export default products;