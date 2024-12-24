import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, verifyPayment } from "../mocks/paymentAPI";

export const initiatePayment = createAsyncThunk(
  "payment/initiatePayment",
  async (amount, { rejectWithValue }) => {
    try {
      const data = await createOrder(amount);
      return data; // { orderId }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const confirmPayment = createAsyncThunk(
  "payment/confirmPayment",
  async (paymentDetails, { rejectWithValue }) => {
    try {
      const data = await verifyPayment(paymentDetails);
      return data; // { success: true/false }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    orderId: null,
    paymentSuccess: false,
    error: null,
  },
  reducers: {
    resetPaymentState: (state) => {
      state.loading = false;
      state.orderId = null;
      state.paymentSuccess = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initiatePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.orderId = action.payload.orderId;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentSuccess = action.payload.success;
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
