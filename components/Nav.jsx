"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { XIcon } from 'lucide-react';

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contacts", label: "Contacts" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeline = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    // Initial setup
    gsap.set(".menu-link-item-holder", { y: 75 });

    // Create timeline
    timeline.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, { scope: container });

  const toggleMenu = () => {
    if (!isMenuOpen) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setScrollDirection(currentScrollY < lastScrollY ? 'up' : 'down');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (scrolled) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }

    if (scrollDirection === 'down') {
      document.body.classList.add('hide_header');
    } else {
      document.body.classList.remove('hide_header');
    }
  }, [scrolled, scrollDirection]);

  return (
    <div className="relative " ref={container}>
      <div className={`header fixed top-0 left-0 z-10 w-full transition-all duration-800 ease-in-out ${scrolled ? 'bg-opacity-80 backdrop-blur' : 'bg-opacity-100'}`}>
      <div className="header_container w-full overflow-hidden bg-none border-b border-neutral-400 justify-between flex items-center whitespace-nowrap px-3.5 py-4 text-sm font-medium text-slate-200 shadow focus:outline-none focus:ring focus:ring-neutral-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-500/50 relative 
  before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] 
  before:bg-no-repeat before:animate-bgScroll">
          <h1 className=" h_titleNav relative text-center text-[15vw] leading-[90%] lg:text-[3.7vw] ">
            <span className="inline-block overflow-hidden align-bottom">
              <span className=" underline  tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] ">    Ayush
              </span>
            </span>
          </h1>
          <div onClick={toggleMenu} className="cursor-crosshair">
          <div className='group overflow-hidden relative cursor-crosshair text-2xl uppercase' leading-6 text-black>
<span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Menu</span>
<span className='absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Menu</span>

    </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className=" menu-overlay fixed top-0 left-0 w-screen h-screen p-8 bg-opacity-85 backdrop-blur bg-neutral-800 text-white z-20 flex"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)" }}
      >
        {/* Overlay Header */}
        <div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center">
          <div>
            <a href="/" className=" cursor-crosshair">Ayush</a>
          </div>
          <div onClick={toggleMenu}>
           <XIcon className="cursor-crosshair" size={60}/>
          </div>
        </div>

        {/* Menu Links */}
        <div className="flex-[4] flex flex-col  px-28 justify-center pt-8">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div
                className="menu-link-item w-max"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                key={index}
              >
                <div className="menu-link-item-holder  relative">
                  <a
                    href={link.path}
                    className=" text-[20vh]  font-normal hover:bg-[url('https://i.pinimg.com/originals/f3/38/20/f3382014efd90354e86d808e65a7c579.gif')] hover:bg-cover transition-all ease-out hover:px-10 hover:transition-all tracking-[-0.02em] leading-[85%]"
                  >
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-[4] flex justify-end items-end">
          <div className="flex">
            <div className="flex-1 flex flex-col justify-end space-y-2">
              <a href="#" className=" hover:opacity-70 transition-opacity">X &#8599;</a>
              <a href="#" className=" hover:opacity-70 transition-opacity">Instagram &#8599;</a>
              <a href="#" className=" hover:opacity-70 transition-opacity">LinkedIn &#8599;</a>
            </div>
            <div className="flex-1 flex flex-col justify-end space-y-2 ml-8">
              <p className="">info@ayush.com</p>
              <p className="">+1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;