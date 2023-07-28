"use client";
import { useState, useRef } from "react";
import ScrollTop from "react-scrolltop-button";
import conatctImg from "../../public/assets/contact/contact.svg";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../components/ui/Modal";
import Iframe from "./map/Iframe";
import Animatedpage from "@/components/app/route/Animatedpage";

//Yup Validation
const schema = yup.object().shape({
  from_name: yup.string().required("Name is required"),
  from_email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  // useForm with yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const form = useRef();

  const closePopup = () => {
    setModal(false);
  };

  const sendEmail = () => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_mruz26q",
        "template_q3x153s",
        form.current,
        "tlJLOfnZ5Nkeq8wD-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setModal(true);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          <Image src={conatctImg} alt="img" />
        </div>

        <section
          className={`contact w-full max-w-3xl px-6 py-4 mx-auto bg-white rounded-md shadow-md mt-20`}
        >
          <h2 className="text-3xl font-raleway font-semibold text-center text-gray-800">
            Get in touch
          </h2>

          <p className="mt-3 font-poppins text-center text-gray-600">
            Discover hidden gems, book accommodations, and create unforgettable
            memories.
          </p>

          <div className="font-poppins grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="https://goo.gl/maps/tTEhxaUZiVWLvC9N7"
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md  hover:bg-[#efbe699f]"
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
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md  hover:bg-[#efbe699f]"
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
              rel="noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safinaalmadina@gmail.com"
              target="_blank"
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md  hover:bg-[#efbe699f]"
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
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div className="font-poppins -mx-2 md:flex items-baseline">
                <div className="w-full mx-2">
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    Name
                  </label>

                  <input
                    {...register("from_name")}
                    className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-md 
                  ${errors.from_name ? "border-red-500" : ""}`}
                    type="text"
                  />
                  {errors.from_name && (
                    <p className="text-red-400 mt-1">
                      {errors.from_name.message}
                    </p>
                  )}
                </div>

                <div className="w-full mx-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    E-mail
                  </label>

                  <input
                    {...register("from_email")}
                    className={`block w-full px-4 py-2 text-gray-700 bg-white border rounded-md 
                  ${errors.from_email ? "border-red-500" : ""}`}
                    type="email"
                  />
                  {errors.from_email && (
                    <p className="text-red-400 mt-1">
                      {errors.from_email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full mt-4 font-poppins">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Message
                </label>

                <textarea
                  {...register("message")}
                  className={`block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md 
                ${errors.message ? "border-red-500" : ""}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="font-poppins flex justify-center mt-6">
                <button
                  type="submit"
                  value="Send"
                  className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  {loading ? (
                    <span className="flex justify-center items-center gap-2">
                      Sending... <ClipLoader size={17} color="white" />
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {modal && (
          <Modal
            onClose={closePopup}
            activeModal={true}
            title="Success"
            centered
          >
            <div className="">
              <p className="text-black leading-5">
                Your Queries Submitted Successfully. Our Team will reach out to
                you soon.
                <br />
                THANKYOU !
              </p>
            </div>
          </Modal>
        )}
        <Iframe />
      </Animatedpage>
    </>
  );
}
