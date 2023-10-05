import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './stripe';

const Payment = () => {
    return (
        <div className='pt-44'>

            <Elements stripe={stripePromise}>
                {/* Your component content */}
                <PaymentForm />
            </Elements>
        </div>
    );
};

export default Payment;