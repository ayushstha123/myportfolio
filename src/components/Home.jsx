import React, { useState } from 'react';
import '../index.css';
import { ContactUs } from './ContactUs';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <nav className="fixed mb-5 flex w-full justify-between bg-blue-800 px-5 py-5 text-white dark:bg-black">
        <h1 className="font-burtons text-xl font-thin">Portfolio</h1>
        <ul className="flex items-center">
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="bx bxs-moon"></button>
          </li>
          <li>
            <a className="ml-8 rounded-md border-none bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-white" download="AyushShrestha_Portfolio.pdf" href="./files/AyushShrestha_Portfolio.pdf"> Resume </a>
          </li>
        </ul>
      </nav>
      <section className="min-h-screen bg-blue-400 pt-28 dark:bg-blue-900">
        <div className="p-10 py-12 text-center">
          <h2 className="py-2 text-5xl font-bold md:text-6xl dark:text-white">Ayush Shrestha</h2>
          <h3 className="py-2 text-xl text-gray-200 dark:text-blue-300 md:text-3xl">Front-end developer</h3>
          <p className="text-md mx-auto text-gray-200 max-w-xl py-5 leading-5 text-gray-800 dark:text-blue-300 md:text-xl">I'm a dedicated front-end developer fueled by the excitement of crafting user-friendly and visually captivating web experiences</p>
          <div className="flex justify-center gap-5 py-3 text-4xl">
            <a href='https://www.facebook.com/ayush.stha.5680/' className="bx bxl-facebook-circle dark:text-white"></a>
            <a href='https://github.com/ayushstha123' className="bx bxl-github dark:text-white"></a>
            <a href='https://www.linkedin.com/in/ayush-shrestha-480a65194/' className="bx bxl-linkedin-square dark:text-white"></a>
          </div>
        </div>
        <div>
          <model-viewer src="./files/airplane.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls tone-mapping="neutral" poster="poster.png" shadow-intensity="1">
            <div slot="hotspot-1" style={{ position: 'relative', top: '90%', left: '50%', transform: 'translate(-0%, -50%)', color: 'white', fontSize: '24px', fontWeight: 'normal', animation: 'jump 1s infinite' }}>
              This is a dog, he is very good
            </div>
          </model-viewer>
        </div>
      </section>
      <section className='px-5 py-10 bg-indigo-100 dark:bg-indigo-900'>
        <div className='pt-10'>
          <h3 className="py-1 text-3xl text-center font-bold dark:text-white">Projects</h3>
          <p className="text-md lg:px-20 py-10 px-3 dark:text-white leading-8">Here are some of my projects that I've worked on. The projects are done with various programming languages.</p>
        </div>
        {/* Project sections */}
      </section>
      <section className="bg-white dark:bg-gray-900">
        <ContactUs />
      </section>
      <footer className="bg-blue-700 dark:bg-blue-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-white">Ayush Shrestha</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">ayyush227@gmail.com</p>
            </li>
            <li>
              <a href="https://www.artstation.com/ayyushstha" className="mr-4 hover:underline md:mr-6">Visit my Art page</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
