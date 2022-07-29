import axios from 'axios';

const paymentUrl = 'http://localhost:5000/api/payment/';

export const initPayment = async (payment) => {
    console.log(payment);
    // return await axios.post(`${SessionUrl}/`, {session})
    const { data } = await axios.post(`${paymentUrl}/verify`, payment)
      .then((res) => res.data);
}

export const handlePayment = async (payment) => {
    console.log(payment);
    // return await axios.post(`${SessionUrl}/orders`, {session})
    const { data } = await axios.post(`${paymentUrl}/orders`, payment)
      .then((res) => res.data);
}
