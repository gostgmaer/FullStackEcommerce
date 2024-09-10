import { razorPayPublic } from '@/config/setting';
import OrderServices from '@/helper/network/services/OrderServices';
import { notifyerror, notifySuccess } from '@/utils/notify/notice';
import axios from 'axios';

const RazorpayPayment = async ( data, session ) => {


    try {
        // Step 1: Create order on the backend
        const requests = await OrderServices.addOrder(data, { "Authorization": `Bearer ${session["accessToken"]}` })


        const { id: order_id, amount, currency } = requests["result"];
        

        // Step 2: Initialize Razorpay checkout
        console.log(window["Razorpay"]);
        const options = {
            key: razorPayPublic, // Replace with your Razorpay key_id
            amount: amount,
            currency: currency,
            name: 'Your Company Name',
            description: 'Payment for Order #123',
            order_id: order_id, // Pass Razorpay order_id from backend
            handler: async function (response) {
                // Razorpay returns these three values after successful payment
                const order_id = response.razorpay_order_id;
                const paymentId = response.razorpay_payment_id;
                const signature = response.razorpay_signature;

                // Log or send these to the backend for verification
                console.log(order_id, paymentId, signature);

                // Call backend to verify payment
                const requests = await OrderServices.verifyOrder({payment_method:data.payment_method,order_id, paymentId, signature}, { "Authorization": `Bearer ${session["accessToken"]}` })

console.log(requests);


                // axios.post('/orders/verify-payment', {
                //     razorpay_order_id,
                //     razorpay_payment_id,
                //     razorpay_signature,
                // })
                //     .then(response => {
                //         if (response.data.status === 'success') {
                //            notifySuccess(response.data.message)
                //         } else {
                //             notifyerror("Payment verification failed!")
                //         }
                //     })
                //     .catch(error => {
                //         console.error('Verification error', error);
                //     });
            },
            prefill: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp1 = new window['Razorpay'](options);
        console.log(rzp1);
        
        rzp1.open(); // Open Razorpay payment window
    } catch (error) {
        console.error('Payment failed', error);
        // alert('Payment failed, please try again!');
        notifyerror(error)
    }

  
};

export default RazorpayPayment;
