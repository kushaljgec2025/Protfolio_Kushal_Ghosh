import React, { useEffect, useState } from "react";

const TypingEffect = () => {
  const texts = ["AI/ML Enthusiast ", "Software Developer", "GATE AIR 49"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const nextText = isDeleting
        ? currentText.substring(0, displayText.length - 1)
        : currentText.substring(0, displayText.length + 1);

      setDisplayText(nextText);

    
      if (!isDeleting && nextText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="">
      <div className="w-full h-10">
        <h1 className="p-1 text-center  pr-5 text-3xl text-white dark:text-cayn font-bold">
          {displayText}
        </h1>
      </div>
    </div>
  );
};

export default TypingEffect;
