import React, { useState, useEffect } from "react";
import { CgArrowUpR } from "react-icons/cg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="scroll-to-top">
        {isVisible && (
          <div className="scrolltotop-icon">
            <CgArrowUpR onClick={scrollUp} />
          </div>
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
