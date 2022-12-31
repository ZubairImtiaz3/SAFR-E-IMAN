import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import Animatedpage from "./Animatedpage";
import contactSvg from "../assets/contact.svg";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

//import animation
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alert, setAlert] = useState("");
  const [hideForm, setHideForm] = useState("");

  //Reseting Form After Submit

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    window.scrollTo(0, 710);

    clearForm();

    emailjs
      .sendForm(
        "service_i15jugt",
        "template_mtrsscy",
        form.current,
        "wyBk70zbfe-AdvM4I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setAlert(alertSubmit);

    setTimeout(() => {
      setAlert("");
    }, 1500);

    setHideForm("hidden");

    setTimeout(() => {
      setHideForm("");
    }, 1500);
  };

  const alertSubmit = (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className=" mt-8 p-4 sm:p-0">
        <div role="alert">
          <div class="bg-[#efbd69] text-black font-bold rounded-t px-4 py-2">
            Success.
          </div>
          <div class="border border-t-0  bg-gray-200 px-4 py-3 text-black">
            <p>Your Queries Subimitted Successfully. THANKYOU !</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ScrollTop
        text="^"
        distance={900}
        className="scroll-your-role"
        speed={500}
        target={0}
        breakpoint={2560}
      />

      <Animatedpage>
        <div className="illustrationContact max-w-[35%] mx-auto mt-20">
          <img src={contactSvg} alt="svg" />
        </div>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <section
            className={`contact ${hideForm} w-full max-w-3xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20`}
          >
            <h2 className="text-3xl font-Raleway font-semibold text-center text-gray-800 dark:text-white">
              Get in touch
            </h2>

            <p className="mt-3 font-Poppins text-center text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>

            <div className="font-Poppins grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="https://goo.gl/maps/tTEhxaUZiVWLvC9N7"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2">Qila Ahmad Abad</span>
              </a>

              <a
                href="https://wa.me/923446463437"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">+923472709395</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=safinaalmadina@gmail.com"
                target="_blank"
                className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2">Safinaalmadina</span>
              </a>
            </div>

            <div className="mt-6 ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="font-poppins items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                      Name
                    </label>

                    <input
                      required
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="text"
                      name="from_name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                      E-mail
                    </label>

                    <input
                      required
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="email"
                      name="from_name"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Message
                  </label>

                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    name="message"
                    className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  ></textarea>
                </div>

                <div className="font-Poppins flex justify-center mt-6">
                  <button
                    type="submit"
                    value="Send"
                    className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </AnimationOnScroll>

        {alert}
      </Animatedpage>
    </>
  );
}

export default Contact;
