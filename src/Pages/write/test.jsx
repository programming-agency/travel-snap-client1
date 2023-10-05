import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentSuccess, setPaymentSuccess] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Use Stripe.js methods to handle payment submission
        if (!stripe || !elements) {
            return;
        }

        // Create a PaymentMethod or PaymentIntent here
        try {
            const result = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });

            if (result.paymentMethod) {
                // Payment successful
                setPaymentSuccess(true);
                console.log(result.paymentMethod);
            }
        } catch (error) {
            // Handle payment error, e.g., display an error message
            console.error(error);
        }

        // Example: const result = await stripe.createPaymentMethod({ type: 'card', card: elements.getElement(CardElement) });

        // Handle the result, e.g., by sending it to your server
    };

    return (
        <div className='p-10 mx-auto rounded-lg w-[500px] bg-white'>

            {!paymentSuccess ? (
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button className='btn btn-primary mt-5' type="submit">Pay</button>
                </form>
            ) : (
                <p className='text-green-500 text-center'>Payment successful!</p>
            )}
        </div>
    );
}

export default PaymentForm;
