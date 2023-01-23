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
        <div className="" >
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="mb-3">
              <input
                type="text"
                name="full_name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <input
                name="to_email"
                type="email"
                placeholder="E-mail"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message_area"
                as="texarea"
                rows="6"
                placeholder="Message Area"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button 
              type="submit"

              onClick={ShowToast}
              className="w-full px-8 py-2 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter">
                Send
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
