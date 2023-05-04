import React from "react";
import "./BookingDone.css";
import confirm from "./images/confirm.png";
import profilecircle from "./images/profilecircle.png";
import call from "./images/call.png";

function BookingDone() {
  return (
    <div className="container">
      <div className="bookingdone_uppercontainer">
        <div className="bookingdone_heading">Maid at HOME</div>
        <div className="cancel_booking">
          <button>Cancel Booking</button>
        </div>
      </div>
      <div className="booking_middle_container">
        <div className="booking_summary">
          <div className="booking_summary_heading">
            <img src={confirm} alt="" /> <span>Booking Confirmed</span>
          </div>
          <div className="booking_summary_info">
            <div className="booking_summary_info_photo">
              <img src={profilecircle} alt="" />
            </div>
            <div className="booking_summary_info_info">
              A maid has been assigned at your place at 11:00 pm today <br />
              Our executive will arrive as per schedule <br />
              An OTP has been sent to your registered Email address, share it
              with the handyman upon his arrival
            </div>
          </div>
          <div className="booking_summary_time">
            Maid will arrive at your location in <br />
            <span>10 mins</span>
          </div>
        </div>
        <div className="booking_payment">
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
            <button>Pay after Completion</button>
          </div>
        </div>
      </div>
      <div className="booking_third_container">
        <div className="bookingend_heading">Service Checklist</div>
        <div className="bookingend_text">
          See what all services you can take from our checklist
        </div>
      </div>
      <div className="booking_end_container">
        <div className="booking_end_text">
          <div className="bookingend_heading">Booking Confirmed</div>
          <div className="bookingend_text">
            Call us in case you face any issue in our service
          </div>
        </div>
        <div className="booking_end_contact">
          <button>
            <img src={call} alt="" /> <span>011-5522 3322 11</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingDone;
