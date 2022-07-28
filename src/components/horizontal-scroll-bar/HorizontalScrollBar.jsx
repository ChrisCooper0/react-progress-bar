import React, { useEffect } from "react";
import "./HorizontalScrollBar.css";

const HorizontalScrollBar = () => {
  const handleScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="bar" id="bar"></div>
    </div>
  );
};

export default HorizontalScrollBar;
