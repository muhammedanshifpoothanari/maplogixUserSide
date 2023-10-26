"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";

const TypewriterAnimation = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".typewriter-text span");
   const animateText = () => {
    gsap.fromTo(
      textElements,
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 5, // Reduce duration for smoother letter-by-letter animation
        stagger: 0.1, 
        ease: "power1.out",
        repeat: 5,
        yoyo: true,
      }
    );
   }
    const interval = setInterval(() => {
        animateText();
      }, 9000); 
      animateText(); 
  
      return () => {
        clearInterval(interval); 
      };
  }
  , []);

  return (
    <div>
      <div className="typewriter-text ">
      <span className="1 mx-1">Hello!</span>
      <span className="1 mx-1">.</span><span className="1 mx-1">.</span><span className="1 mx-1">.</span><br></br>
        <span className="1 mx-1">please</span>
        <span className="2 mx-1">login</span>
        <span className="3 mx-1">we</span>
        <span className="4 mx-1">are</span>
        <span className="5 mx-1">eager</span>
        <span className="6 mx-1">to</span>
        <span className="7 mx-1">work</span>
        <span className="8 mx-1">with</span>
        <span className="9 mx-1">you</span>
        <span className="10 mx-1">👋</span>
      </div>
    </div>
  );
};

export default TypewriterAnimation;
