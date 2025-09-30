import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import Earth from "../componets/Earth";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false); // ✅ MISSING STATE FIXED

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_913fo1t',      // ✅ your actual service ID
        'template_2pxhkac',     // ✅ your template ID
        form.current,
        '63V66jHLLEbGjsSj0'     // ✅ your public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setSubmitted(true);
          e.target.reset(); // clear form
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true); // show form + Earth after delay
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-container">
      <h1 className="text-5xl font-bold no-underline border-none">Contact Me</h1>

      {/* Visible immediately */}
      <div className="contact-links w-full flex flex-col items-center text-center px-4">
        <p className="mb-2">
          📧 Email:{" "}
          <a href="mailto:pranaythombre05@gmail.com">pranaythombre05@gmail.com</a>
        </p>
        <p className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/PranayThombre" target="_blank" rel="noreferrer">
            🔗 GitHub
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/pranay-thombre-4a2595243/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          | <a href="/Pranay_Thombre_Resume.pdf" download>Resume</a>
        </p>
      </div>

      {/* Delayed visibility */}
      {showForm && (
        <div className="contact-wrapper flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full max-w-6xl mx-auto px-4 sm:px-8 py-16">
          {/* Earth Animation */}
          <div className="earth-container w-full md:w-[45%] flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]">
            <Earth />
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form w-full md:w-[50%] flex flex-col gap-5"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Let's Talk</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md outline-none border text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md outline-none border text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="p-3 rounded-md outline-none border resize-y text-black"
            ></textarea>
            <button type="submit" className="py-3 rounded-md font-semibold border">
              Send Message
            </button>
            {submitted && (
              <p className="success-msg text-center font-medium">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
