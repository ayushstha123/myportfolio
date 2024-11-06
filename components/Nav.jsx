import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false); // Detect when user scrolls
  const [scrollDirection, setScrollDirection] = useState('up'); // Track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0); // Track the previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user scrolled more than 50px
      setScrolled(currentScrollY > 50);

      // Detect the scroll direction
      if (currentScrollY < lastScrollY) {
        setScrollDirection('up'); // Scrolling up
      } else {
        setScrollDirection('down'); // Scrolling down
      }

      // Update the previous scroll position
      setLastScrollY(currentScrollY);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Dependency on lastScrollY to detect direction

  // Add or remove classes based on scroll position and direction
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

  }, [scrolled, scrollDirection]); // Update when scrolled or direction changes


  return (
  
    <div className={`header fixed top-0 left-0 z-10 w-full transition-all duration-800 ease-in-out ${scrolled ? 'bg-opacity-80 backdrop-blur' : 'bg-opacity-100'}`}>
      {/* Navbar */}
      <div className="header_container w-full overflow-hidden bg-none border-b  border-neutral-400 justify-between flex items-center whitespace-nowrap px-3.5 py-4 text-sm font-medium text-slate-200  shadow focus:outline-none focus:ring focus:ring-neutral-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-500/50 relative 
  before:absolute before:inset-0 before:rounded-[inherit]  before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] 
  before:bg-no-repeat before:animate-bgScroll ">
<h1 className=" h_titleNav relative text-center text-[15vw] leading-[90%] lg:text-[3.7vw] ">
                    <span className="inline-block overflow-hidden align-bottom">
                    <span className=" underline  tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] ">    Ayush

                        </span>


                    </span>


                </h1>
        <div className="flex flex-row gap-3 text-white">
          <div className='group overflow-hidden relative cursor-crosshair  text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Home</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Home</span>
          </div>

          <div className='group overflow-hidden relative cursor-crosshair text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>About</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>About</span>
          </div>
          
          <div className='group overflow-hidden relative cursor-crosshair text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Projects</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Projects</span>
          </div>

          <div className='group overflow-hidden relative cursor-crosshair text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Contacts</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Contacts</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Nav;