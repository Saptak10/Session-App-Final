import React, { useState } from "react";
import axios from 'axios';

import "./payment.css";

const Payment = () => {
	const [session, setSession] = useState({
		name: "Rahul",
		course: "Commerce",
		duration: 30,
		price: 2000,
	});

	const initPayment = (data) => {
		const options = {
			key: "12414135135135",
			amount: data.amount,
			currency: data.currency,
			name: session.name,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: session.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="payment">
			<div className="session_container">
				<p className="session_author">{session.course}</p>
				<p className="session_name">By {session.name}</p>
				<p className="session_price">
					Price : <span>&#x20B9; {session.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div>
	);
}

export default Payment;