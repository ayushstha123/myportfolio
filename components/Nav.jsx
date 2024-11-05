import React from 'react';

const Nav = () => {
  return (
    <div className=" sticky top-0">
      {/* Navbar */}
      <div className="w-full border-b  border-neutral-400 justify-between flex items-center whitespace-nowrap px-3.5 py-4 text-sm font-medium text-slate-200 bg-gradient-to-r from-neutral-900 to-neutral-800 shadow focus:outline-none focus:ring focus:ring-neutral-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-500/50 relative 
  before:absolute before:inset-0 before:rounded-[inherit]  before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] 
  before:bg-no-repeat before:animate-bgScroll ">
        <div className="text-4xl text-white">Ayush</div>
        <div className="flex flex-row gap-3 text-white">
          <div className='group overflow-hidden relative cursor-pointer text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Home</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Home</span>
          </div>

          <div className='group overflow-hidden relative cursor-pointer text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>About</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>About</span>
          </div>
          
          <div className='group overflow-hidden relative cursor-pointer text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Projects</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Projects</span>
          </div>

          <div className='group overflow-hidden relative cursor-pointer text-lg uppercase leading-6 text-white'>
            <span className='font-md inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>Contacts</span>
            <span className='font-md absolute left-0 translate-y-[120%] rotate-120  inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Contacts</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Nav;