import React, { useState } from 'react'
import "../index.css";
import { ContactUs } from './ContactUs';


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>      
    <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <nav class="fixed mb-5 flex w-full justify-between bg-blue-800 px-5 py-5 text-white dark:bg-black">
        <h1 class="font-burtons text-xl font-thin">Portfolio</h1>
        <ul class="flex items-center">
          <li>
            <button onClick={() => setDarkMode(!darkMode)}
                  class="bx bxs-moon"></button>
          </li>
          <li>
            <a class="ml-8 rounded-md border-none bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-white" download="AyushShrestha_Portfolio.pdf" href="./files/AyushShrestha_Portfolio.pdf"> Resume </a>
          </li>
        </ul>
      </nav>
      <section class="min-h-screen bg-blue-400 pt-28 dark:bg-blue-900">
        <div class="p-10 py-12 text-center">
          <h2 class="py-2 text-5xl font-bold md:text-6xl dark:text-white">Ayush Shrestha</h2>
          <h3 class="py-2 text-xl text-gray-200 dark:text-blue-300 md:text-3xl">Front-end developer</h3>
          <p class="text-md mx-auto text-gray-200 max-w-xl py-5 leading-5 text-gray-800 dark:text-blue-300 md:text-xl">I'm a dedicated front-end developer fueled by the excitement of crafting user-friendly and visually captivating web experiences</p>
          <div class="flex justify-center gap-5 py-3 text-4xl">
            <a href='https://www.facebook.com/ayush.stha.5680/' class="bx bxl-facebook-circle dark:text-white"></a>
            <a href='https://github.com/ayushstha123' class="bx bxl-github dark:text-white"></a>
            <a href='https://www.linkedin.com/in/ayush-shrestha-480a65194/' class="bx bxl-linkedin-square dark:text-white"></a>
          </div>
        </div>
        <div>
          <model-viewer src="./files/shiba.glb" ar ar-placement="wall" ></model-viewer>
        </div>
      </section>
      <section class="bg-white dark:bg-sky-800" >

        <div class="px-10 py-10 text-center">
          <h3 class="py-4 text-4xl font-bold dark:text-white">Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I offer from a wide range of services, including brand design, programming and teaching.</p>
          <div class="gap-10 lg:flex justify-center">

            <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 text-center hover:bg-blue-200  bg-blue-300 shadow-2xl dark:bg-white">
              <img class="mx-auto w-1/2 object-contain md:object-scale-down" src="https://static.vecteezy.com/system/resources/previews/015/099/616/non_2x/3d-website-language-programming-code-icon-illustration-png.png" width="50" height="50" alt="" />
              <h3 class="pb-2 pt-8 text-lg font-medium">Front End Development</h3>
              <p>Creating various interactive and responsive application with the help of front end programming language.</p>
              <div class="font-mono text-sm">
                <h4 class="py-2 pt-8 text-blue-800">Programming Languages I Use :</h4>
                <p class="py-1 text-gray-800">Html css javascript</p>
                <p class="py-1 text-gray-800">tailwind scsss react js</p>

              </div>
            </div>

            <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 hover:bg-green-400  bg-green-300 text-center shadow-2xl dark:bg-white">
              <img class="mx-auto mt-10 w-1/2 object-contain md:object-scale-down" src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" width="50" height="50" alt="" />
              <h3 class="pb-2 pt-8 text-lg font-medium">MERN STACK</h3>
              <p>Creating beautiful fully working website with mern stack.</p>
              <div class="font-mono text-sm">
                <h4 class="py-2 pt-8 text-gray-600">Design Tools I Use</h4>
                <p class="py-1 text-gray-800">MongoDB Express Reactjs Nodejs</p>
              </div>
            </div>

            <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 hover:bg-yellow-400  bg-yellow-300 text-center shadow-2xl dark:bg-white">
              <img class="mx-auto w-1/2 object-contain md:object-scale-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5402863-4521476.png?f=webp" width="50" height="50" alt="" />
              <h3 class="pb-2 pt-8 text-lg font-medium">Back-end Development</h3>
              <p>Creating elegant designs suited for your needs following core design theory.</p>
              <div class="font-mono text-sm">
                <h4 class="py-2 pt-8 text-yellow-700">Languages I Use</h4>
                <p class="py-1 text-gray-800">SQL</p>
                <p class="py-1 text-gray-800">Java</p>
                <p class="py-1 text-gray-800">PHP</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='px-5 py-10 bg-indigo-100 dark:bg-indigo-900'>
        <div className='pt-10'>
          <h3 class="py-1 text-3xl text-center font-bold dark:text-white">Projects</h3>
          <p class="text-md lg:px-20 py-10 px-3 dark:text-white leading-8">Here are some of my projects that ive worked in through out the time. The projects are done with various programming languages that are given below of it. There is a preview of the website of the projects also.</p>
        </div>

        <div class=" mx-auto my-10 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-4xl">
          <div class="bg-blue-400 md:flex">
            <div class=" md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/quote.png" alt="Modern building architecture" />
            </div>
            <div class="p-8">
              <a href="https://ayushstha123.github.io/stoicquotegen/" class="text-sm text-white font-semibold uppercase tracking-wide text-indigo-500 hover:underline cursor-pointer">Preview</a>
              <h2 href="#" class="mt-1 block text-lg font-bold leading-tight text-black ">Quote Generator</h2>
              <p class=" mt-2">Here is a quote generator that generates quote from apis , the quote that it generates is different every time and we can tweet that quote in our twitter.</p>
            </div>
          </div>
        </div>

        <div class="mx-auto my-10 max-w-md overflow-hidden rounded-xl shadow-md md:max-w-4xl">
          <div class="bg-green-400 md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/todolist.png" alt="Modern building architecture" />
            </div>
            <div class="p-8">
              <a href="https://ayushstha123.github.io/Todolst/" class="text-sm font-semibold uppercase tracking-wide text-white hover:underline cursor-pointer">Preview</a>
              <h2 href="#" class="mt-1 block text-lg font-bold leading-tight text-black ">Todo list</h2>
              <p class="mt-2">Here is a Todolist that is made with javascript.</p>
            </div>
          </div>
        </div>
        <div class=" mx-auto my-10 max-w-md overflow-hidden rounded-xl shadow-md md:max-w-4xl">
          <div class="bg-blue-400 md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/tipcalculator.png" alt="Tip calculator" />
            </div>
            <div class="p-8">
              <a href="https://ayushstha123.github.io/Tip_calculator/" class=" text-sm font-semibold uppercase tracking-wide text-white hover:underline cursor-pointer">Preview</a>
              <h2 href="#" class="mt-1 block text-lg font-bold leading-tight text-black ">Tip Calculator</h2>
              <p class="mt-2">Here is a Tip calculator that calculates tips per person and gives the total per person.It is made with javascript</p>
            </div>
          </div>
        </div>

        <div class="bg-green-400 mx-auto my-10 max-w-md overflow-hidden rounded-xl shadow-md md:max-w-4xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="./img/flybuy.png" alt="Modern building architecture" />
            </div>
            <div class="p-8">
              <a href="https://flybuy-frontend-51kr.onrender.com" class=" text-sm font-semibold uppercase tracking-wide text-white hover:underline cursor-pointer">Preview</a>
              <h2 href="#" class="mt-1 block text-lg font-bold leading-tight text-black ">Flybuy</h2>
              <p class="mt-2">Here is a Mern stack app called flybuy which have the functionality of a real world application. It is made with MongoDB,React js,Express js, Node js</p>
            </div>
          </div>
        </div>

      </section>
      <section class="bg-white dark:bg-gray-900">
        <ContactUs/>
      </section>
        <footer class="bg-blue-700 dark:bg-blue-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-white">Ayush Shrestha 
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <p class="mr-4 hover:underline md:mr-6 ">ayyush227@gmail.com</p>
        </li>
        <li>
            <a href="https://www.artstation.com/ayyushstha" class="mr-4 hover:underline md:mr-6">Visit my Art page</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
    
  )
}

export default Home