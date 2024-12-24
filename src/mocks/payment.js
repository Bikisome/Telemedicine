import axios from "axios";

const API_BASE_URL = "http://your-backend-url.com"; // Replace with your backend URL

export const createOrder = async (amount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create-order`, {
      amount,
    });
    return response.data; // { orderId }
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw error;
  }
};

export const verifyPayment = async (paymentDetails) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/verify-payment`,
      paymentDetails
    );
    return response.data; // { success: true/false }
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    throw error;
  }
};
