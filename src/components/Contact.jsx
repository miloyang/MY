import { send } from "emailjs-com";
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "miloyang9@gmail.com",
    message: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, from_name, to_name, message } = toSend;

  // Handle change function
  const handleChange = (e) => {
    // validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Invalid email format!");
      } else {
        setErrorMessage("");
      }
    } else {
      // error message for blank elements
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    // if there are no error messages
    if (!errorMessage) {
      // update the formState value for the name property
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  };

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_zecsrbj", "template_fn2sycg", toSend, "4z5qyg3cszoCjIxJo")
      .then((response) => {
        console.info("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <section className="container flex justify-center flex-col items-center">
      <h2 className="top-title mt-5 mb-3 text-[50px] font-bold text-black tracking-widest">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col text-[20px] text-black">
          <label htmlFor="to_name">To:</label>
          <input
            type="text"
            name="to_name"
            defaultValue={to_name}
            onBlur={handleChange}
            className="mb-2 border-[1px] border-black"
          />
        </div>
        <div className="flex flex-col text-[20px] text-black">
          <label htmlFor="from_name" className="pr-2">From:</label>
          <input
            type="text"
            name="from_name"
            defaultValue={from_name}
            onBlur={handleChange}
            className="mb-2 border-[1px] border-black"
          />
        </div>
        <div className="flex flex-col text-[20px] text-black">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="mb-2 border-[1px] border-black"
          />
        </div>
        <div className="flex flex-col text-[20px] text-black">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="mb-2 border-[1px] border-black"
          />
          {errorMessage && (
            <div className="error">
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-info mb-5 border-[1px] border-black justify-between items-center"
          // style={{ width: "75%", margin: "0 auto" }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
