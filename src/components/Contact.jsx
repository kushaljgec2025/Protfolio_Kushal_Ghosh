import React from "react";
import Line from "./Line";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Contact_from from "./Contact_from";
import { useState } from "react";

function Contact() {
  const [description, setDescriptions] = useState("mail body");
  const [name, setName] = useState("xyz@gmail.com");
  const [subject, setSubject] = useState("subject");
  const phoneNumber = "8918640299";
  const maildetails = {
    to: "kushalghosh510@gmail.com",
    from: name,
    subject: subject,
    body: description,
  };
  const openmail = () => {
    window.open(`mailto:${maildetails.to}`);
  };
  const sendEmail = () => {
    window.open(
      `mailto:${maildetails.to}?subject=${encodeURIComponent(
        maildetails.subject
      )}&body=${encodeURIComponent(
        "Name:" + maildetails.from + "\n\n" + maildetails.body
      )}`
    );
  };
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const contact_details = [
    {
      Type: "Email",
      value: "kushalghosh510@gmail.com",
      icon: <AiOutlineMail />,
    },
    {
      Type: "Phone",
      value: "1234567890",
      icon: <AiOutlinePhone />,
    },
  ];
  return (
    <div className="flex justify-center w-full items-center pt-[15vh]">
      <div className="lg:w-[70%] w-[90%] min-h-screen " data-aos="fade-up">
        <h1 className="contact text-2xl mb-4 text-center sm:text-left text-midblue">
          CONTACT
        </h1>
        <div className="contact_img !text-white  rounded-3xl  ">
          <ul className="contact flex flex-row justify-between p-4 bg-white dark:bg-slate bg-opacity-60 backdrop backdrop-blur-sm rounded-t-3xl">
            {contact_details.map((detail, index) => (
              <li
                className="bg-blue p-4 rounded-full w-[3em] h-[3em] flex justify-center items-center m-auto lg:m-0 lg:mb-0 mb-4 cursor-pointer"
                key={index}
                onClick={detail.Type === "Email" ? openmail : handleCall}
              >
                {detail.icon}
              </li>
            ))}
          </ul>

          <div>
            <div className="backdrop  rounded-b-3xl">
              <div className="form-horizontal w-full flex flex-col  lg:grid lg:grid-cols-2    gap-10  p-4 ">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Name">
                    <strong>Name</strong>
                  </label>
                  <input
                    id="Name"
                    className="Name w-full max-w-full p-2 rounded-md text-gray"
                    placeholder="Jhon Doe"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Subject">
                    <strong>Subject</strong>
                  </label>
                  <input
                    id="Subject"
                    className="Subject w-full max-w-full p-2 rounded-md text-gray "
                    placeholder="Let me know how can I help you"
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col col-span-2 space-y-2">
                  <label htmlFor="Content">
                    <strong>Your Message</strong>
                  </label>
                  <textarea
                    id="Content"
                    className="Content w-full p-2 rounded-md text-gray "
                    placeholder="Leave a Comment"
                    type="text"
                    onChange={(e) => setDescriptions(e.target.value)}
                  />
                </div>

                <button
                  className=" ring-2  px-4 p-1 col-span-2  m-auto rounded-xl ring-white hover:ring-1 "
                  type="submit"
                  onClick={sendEmail}
                >
                  Send email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
