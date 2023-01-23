import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";
import "../styles/ContactUs.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { useEffect, useRef, useState } from "react";
import ToastSendEmail from "./ToastSendEmail";

export default function ContactUs(props) {
  const [showToast, setShowToast] = useState(false);

  const ShowToast = () => {
    setShowToast(true);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6sl3bfm",
        "template_o8md8kc",
        form.current,
        "ZLzU6byn9qwJVx3ih"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.message);
        }
      );
    e.target.reset();
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <section id="contactUs">
      {showToast && <ToastSendEmail handleCloseToast={handleCloseToast} />}

      <h3>Contact Us</h3>
      <Container className="cont">
        <div className="icons">
          <span>
            <SocialIcon url="https://twitter.com" />
          </span>

          <span>
            <SocialIcon url="https://facebook.com" />
          </span>

          <span>
            <SocialIcon url="https://instagram.com" />
          </span>

          <span>
            <SocialIcon url="https://linkedin.com" />
          </span>
        </div>

        <div className="separator">or</div>
        <div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              className="form_inputs"
              name="full_name"
              type="text"
              placeholder="Full Name"
            />

            <input
              className="form_inputs"
              name="to_email"
              type="email"
              placeholder="Email"
            />
            <input
              className="form_inputs"
              name="subject"
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Message Area"
              className="form_inputs text_area_input"
              name="message_area"
            />

              <button
                className="form_inputs text_area_input submitButton"
                onClick={ShowToast}
                type="submit"
                id="btnsubmit"
              >
                Submit
              </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
