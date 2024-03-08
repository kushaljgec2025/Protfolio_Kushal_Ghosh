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
    <div
      className="contact lg:w-[70%] w-[90%]   lg:mt-[5vh] flex flex-col justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h1 className="contact text-2xl mb-4 text-center sm:text-left text-midblue">
        CONTACT
      </h1>
      <div className="contact_img !text-white  rounded-3xl">
        <ul className="contact flex flex-row justify-between p-4 bg-white bg-opacity-20 backdrop backdrop-blur-sm rounded-t-3xl">
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
          <div className="form-horizontal w-full flex flex-col  lg:grid lg:grid-cols-2     gap-10 my-2 p-4 ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="Name">Name</label>
              <input
                id="Name"
                className="Name w-full max-w-full p-2 rounded-md text-gray"
                placeholder="Jhon Doe"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="Subject">Subject</label>
              <input
                id="Subject"
                className="Subject w-full max-w-full p-2 rounded-md text-gray "
                placeholder="Let me know how can I help you"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col col-span-2 space-y-2">
              <label htmlFor="Content">Your Message</label>
              <textarea
                id="Content"
                className="Content w-full p-2 rounded-md text-gray "
                placeholder="Leave a Comment"
                type="text"
                onChange={(e) => setDescriptions(e.target.value)}
              />
            </div>

            <button
              className="bg-gradient-to-t  from-cayn to-blue p-2 col-span-2 w-[80%] m-auto rounded-xl ring-white hover:ring-1 "
              type="submit"
              onClick={sendEmail}
            >
              Send email
            </button>
          </div>
        </div>
      </div>

      <Line />
    </div>
  );
}

export default Contact;
