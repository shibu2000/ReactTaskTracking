import React, { useState, useRef, useEffect } from "react";
import { ThemeContext } from "../App";
import myimage from "../assets/myimage.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = React.useContext(ThemeContext);

  const form = useRef();

  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");

  //state variable for showin notification/warning message
  const [notificationMsg, setNotificationMsg] = useState(
    "This is a test notification"
  );

  //state variable for display/hide notification box
  const [isNotification, setIsNotification] = useState(false);

  const [subject, setSubject] = useState("");

  //state variable for query body
  const [message, setMessage] = useState("");

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  //state variable  for disable/enable send button based on email and message validation
  // const [submitBtnDisable, setSubmitBtnDisable] = useState(false);

  const activeNotification = (msg) => {
    setNotificationMsg(msg);
    setIsNotification(true);

    setTimeout(() => {
      setIsNotification(false);
    }, 1500);
  };

  //Method for sending mail using Email.js library
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(isName, isEmail, isMessage);

    if (isName === false || isEmail === false || isMessage === false) {
      activeNotification("Fill all the fields correctly !!");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmailId("");
            setSubject("");
            setMessage("");
            activeNotification("Query Send Successfully!!");
          },
          (error) => {
            console.log(error.text);
            activeNotification("Error! Try Again!!");
          }
        );
    }
  };

  return (
    <section className="grid md:grid-cols-2 gap-2">
      <div
        className={`absolute bg-orange-500 p-5 top-19 rounded ${
          isNotification ? "block" : "hidden"
        }`}
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {notificationMsg}
      </div>
      <div
        className="flex justify-center items-center  md:sticky top-0 pt-28 md:pt-0"
        style={{
          zIndex: "-999",
        }}
      >
        <div
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
          }}
          className="bg-orange-400 relative h-72 w-72 md:h-60 md:w-60 outline sm:mt-20"
        >
          <img
            src={myimage}
            alt="myimage"
            className="absolute left-4 bottom-16 sm:bottom-10 md:w-48 w-4/5"
            style={{
              borderBottom: "20px solid rgba(251,146,60,0)",
              borderRadius: "15%",
              filter: "drop-shadow(8px 8px 10px orange)",
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card md:w-4/6 p-6">
          <form ref={form} onSubmit={sendEmail} id="contactForm">
            <div className="formGroup mb-3">
              <label className="block text-xl mb-3">
                Name: <span className="text-red-600">&#42;</span>
              </label>
              <input
                required
                type="text"
                name="user_name"
                id=""
                className={`w-full h-10 border rounded-xl p-1 bg-slate-50 focus:outline-slate-400 text-black ${
                  !isName ? "border-red-500" : ""
                }`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  setName(name.trim());
                  if (
                    !name.match(/^(?:[a-zA-Z]+ ?){2}$/) ||
                    name.trim().length < 2
                  ) {
                    activeNotification("Enter Valid Name!");
                    setIsName(false);
                  } else {
                    setIsName(true);
                  }
                }}
              />
            </div>

            <div className="formGroup mb-3">
              <label className="block text-xl mb-3">
                Email Id: <span className="text-red-600">&#42;</span>
              </label>
              <input
                required
                type="text"
                name="user_email"
                id=""
                className={`w-full h-10 rounded-xl p-1 border bg-slate-50 focus:outline-slate-400 text-black ${
                  !isEmail ? "border-red-500" : ""
                }`}
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                onBlur={() => {
                  //CEmail validation through REGEX
                  let isMatch = emailId.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );

                  //Show/hide notification based on email validation(true/false)
                  if (!isMatch) {
                    activeNotification("Invalid Email Address! Try Again");
                    setIsEmail(false);
                  } else {
                    setIsEmail(true);
                  }
                }}
              />
            </div>

            <div className="formGroup mb-3">
              <label className="block text-xl mb-3">Subject:</label>
              <input
                type="text"
                name="subject"
                className="w-full h-10 rounded-xl p-1 border bg-slate-50 focus:outline-slate-400 text-black"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="formGroup mb-3">
              <label className="block text-xl mb-3">
                Message: <span className="text-red-600">&#42;</span>
              </label>
              <textarea
                className={`w-full rounded-xl text-slate-950 focus:outline-slate-400 focus:border-slate-300 p-1  md:h-28 border bg-slate-50 ${
                  !isMessage ? "border-red-500" : ""
                }`}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => {
                  if (message.trim().length <= 0) {
                    activeNotification("Type Any Message!!");
                    setIsMessage(false);
                  } else {
                    setIsMessage(true);
                  }
                }}
              ></textarea>
            </div>
            <div className="formGroup text-center">
              <button
                type="submit"
                className={` px-12 py-2 rounded-xl hover:border outline-0 font-mono font-bold cursor-pointer ${
                  theme
                    ? "bg-slate-950 hover:bg-slate-800 active:bg-gray-950"
                    : "bg-gray-400 hover:bg-gray-500 active:bg-gray-500"
                } `}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
