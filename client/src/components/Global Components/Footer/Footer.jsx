import React from "react";
import "./Footer.css";
import facebook_icon from "./images/facebook_icon.png";
import insta_icon from "./images/insta_icon.png";
import twitch_icon from "./images/twitch_icon.png";
import youtube_icon from "./images/youtube_icon.png";

function Footer() {
  return (
    <div className="footer_outer">
      <div className="footer_main container">
        <div className="footer_heading">
          Customer service is important to us. <br />
          Need help? Call- 011 1800 1800 99
        </div>
        <div className="footer_contents">
          <div className="footer_column">
            <div className="footer_column_first_heading_image">
              <img src="/logo.png" />
            </div>
            <div className="footer_column_first_image_container">
              <div className="footer_column_images">
                <a href="">
                  <img src={facebook_icon} alt="" />
                </a>
              </div>
              <div className="footer_column_images">
                <a href="">
                  <img src={insta_icon} alt="" />
                </a>
              </div>
              <div className="footer_column_images">
                <a href="">
                  <img src={youtube_icon} alt="" />
                </a>
              </div>
              <div className="footer_column_images">
                <a href="">
                  <img src={twitch_icon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_column">
            <div className="footer_column_heading">About Us</div>
            <div className="footer_column_contents">
              <a href="">Our Story</a>
              <a href="">Our Mission</a>
              <a href="">Our Team</a>
              <a href="">Why Choose us?</a>
            </div>
          </div>
          <div className="footer_column">
            <div className="footer_column_heading">Quick Links</div>
            <div className="footer_column_contents">
              <a href="">Our Services</a>
              <a href="">Register as Professional</a>
              <a href="">Login/Sign up</a>
              <a href="">Blogs</a>
              <a href="">FAQs</a>
            </div>
          </div>
          <div className="footer_column">
            <div className="footer_column_heading">Support</div>
            <div className="footer_column_contents">
              <a href="">My Account</a>
              <a href="">Refund & Cancellation</a>
              <a href="">Track your booking</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer_column">
            <div className="footer_column_heading">Contact Us</div>
            <div className="footer_column_contents">
              <a href="">contact@pyl.com</a>
              <a href="">+011 001800 1800</a>
              <a href="">Careers</a>
            </div>
          </div>
        </div>
        <div className="footer_end">
          Copyright © 2023 pyl.com Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Footer;
