import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../../parts/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../store/StateProvider'
import './Payment.css'

function Payment() {
    const [{basket, user}] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout (<Link to='/'>{basket?.length}</Link>)</h1>

                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>California, USA</p>
                    </div>
                </div>

                {/* Payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment 
