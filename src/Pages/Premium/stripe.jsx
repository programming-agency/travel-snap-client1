import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NmGJKLGhlQCJ0D8JmLSw1uyu1bYfKWKIVMyyoXet9u9RJ8E3MGuKC0ibPJEjexm2M5BeozO4Q8RvgFPEqRn0quU00BZtARRN0');

export default stripePromise;