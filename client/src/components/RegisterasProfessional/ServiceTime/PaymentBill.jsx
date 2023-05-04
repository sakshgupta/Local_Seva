import React from "react";
import "./PaymentBill.css";

function PaymentBill() {
  return (
    <div className="paymentbill_outer">
      <div className="container">
        <div className="booking_payment payment_bill">
          <div className="payment_summary_heading">Payment Summary</div>
          <div className="payment_summary_bill">
            <div className="payment_bill_total">
              <div className="payment_text">Total</div>
              <div className="payment_amount">200</div>
            </div>
            <div className="payment_bill_total">
              <div className="payment_text">GST</div>
              <div className="payment_amount">36</div>
            </div>
            <div className="payment_bill_total">
              <div className="payment_text">LH Discount</div>
              <div className="payment_amount">36</div>
            </div>
          </div>
          <div className="payment_summary_total_amount">
            <div className="payment_bill_total">
              <div className="payment_text">Total</div>
              <div className="payment_amount">200</div>
            </div>
          </div>
          <div className="payment_paynow">
            <button>Collect Payment</button>
          </div>
        </div>
        <div className="payment_done_button">
          <button>Return to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentBill;
