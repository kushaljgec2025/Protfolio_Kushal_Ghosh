import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import {
  FaXTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaCodeBranch,
} from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer w-full z-10  bg-slate flex md:flex-row flex-col gap-2  justify-around items-center p-4 sm:pb-4 pb-[16vh] rounded-t-lg">
      <div className="flex justify-around gap-4 bg-white p-2 rounded-lg text-slate ">
        <Link to="https://github.com/kushaljgec2025" className=" text-xl">
          <FaGithub />
        </Link>
        <Link to="https://twitter.com/kg_codex2" className=" text-xl">
          <FaXTwitter />
        </Link>
        <Link to="https://www.facebook.com/kggibesup" className=" text-xl">
          <FaFacebook />
        </Link>
        <Link
          to="https://www.instagram.com/stories/kishueal/"
          className=" text-xl"
        >
          <FaInstagram />
        </Link>
      </div>
      <div>
        <Link
          to="https://github.com/kushaljgec2025/BlogPage"
          className="flex justify-center items-center gap-2 bg-white text-slate p-2 rounded-lg hover:bg-gray hover:text-white duration-300"
        >
          Show your love here
          <span>
            <FaStar className="text-yellow" />
          </span>
          <span>
            <FaCodeBranch />
          </span>
        </Link>
      </div>
      <p>
        <span>&#169;</span> Copyright 2024 kg_codex All rights reserved
      </p>
    </div>
  );
}

export default Footer;
// import React from "react";

// function Footer() {
//   return <div>Footer</div>;
// }

// export default Footer;
