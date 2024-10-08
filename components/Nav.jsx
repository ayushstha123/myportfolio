import React from 'react';

const Nav = () => {
  return (
    <div className=" sticky top-0">
      {/* Navbar */}
      <div className="flex w-full font-bold bg-blue-600 justify-between items-center p-5">
        <div className="text-4xl text-white">Ayush</div>
        <div className="flex flex-row gap-4 text-white">
          <div className="cursor-pointer hover:underline">Home</div>
          <div className="cursor-pointer hover:underline">About</div>
          <div className="cursor-pointer hover:underline">Projects</div>
          <div className="cursor-pointer hover:underline">Contacts</div>
        </div>
      </div>

      {/* Repeating wavy border */}
      <div className="border-blue-600 border-b-2 rotate-180 bottom-0 left-0 right-0 h-1 bg-repeat-x" 
           style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 25' preserveAspectRatio='none'%3E%3Cpath d='M0 20 C 20 0, 60 0, 90 20 C 95 20, 100 20, 100 20' fill='rgba(14.51%25,%2038.82%25,%2092.16%25,%201)' /%3E%3C/svg%3E")`,
            backgroundSize: '20px 15px',   
         
             height: '11px'
           }}>
      </div>
    </div>
  );
};

export default Nav;