import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TruestedBy from "./components/TruestedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from 'react-hot-toast'
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${position.current.x}px`;
        outlineRef.current.style.top = `${position.current.y}px`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TruestedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
      {/* Custom cursor outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9999] transition-transform duration-200 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Custom cursor dot */}
      <div
        ref={dotRef}
        className="fixed w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default App;
