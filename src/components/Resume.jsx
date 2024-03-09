import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";
import pdf from "../img/resume.pdf";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div className="h-screen flex">
      <Link to="/" className="fixed top-2 left-2">
        <FaHome />
      </Link>
      {/* <PDFViewer pdfURL={pdf} /> */}
      <div className="w-60% ">
        <iframe
          src={pdf}
          frameborder="0"
          className="h-screen w-screen"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
