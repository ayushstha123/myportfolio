import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Award, Code, Github, GithubIcon, Mail, MapPin, TicketCheckIcon, Twitter, Youtube } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";



export const Projects = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Select all inner spans inside titleRef
            const elements = titleRef.current.querySelectorAll('.h_title span');

            // Animate each span using GSAP
            gsap.to(elements, {
              y: 0,
              opacity: 1,
              duration: 1.5,
              stagger: 0.1,
              ease: 'power4.out',
            });

            // Disconnect observer after the animation is triggered
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div ref={titleRef} className="h_title text-center  px-8 overflow-hidden">
        <h1 className="text-5xl text-neutral-100  text-[15vw] font-bold leading-[80%] lg:text-[8.7vw] ">
          {/* Wrap each word or line in spans for individual animation */}
          <span className=" tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] underline  font-extrabold  inline-block  translate-y-full pb-1.5  pt-6  leading-[81%] will-change-transform ">
            Projects</span>
        </h1>
        <p className="text-zinc-300 font-light m-2">Featured Projects</p>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className=""
      >
        <HeaderBlock />
        <HeaderBlockTwo />
   
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.1,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <div className="bg-gradient-to-r from-neutral-200  to-neutral-500 mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 my-6 p-5 rounded-md">
    <Block className="col-span-12 row-span-2 md:col-span-6 ">
      <svg className="animate-spin-slow mb-4 size-14 rounded-full"
        viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><polyline points="201.14 64 256 32 310.86 64" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-1"></polyline><line x1="256" y1="32" x2="256" y2="112" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-2"></line><polyline points="310.86 448 256 480 201.14 448" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-3"></polyline><line x1="256" y1="480" x2="256" y2="400" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-4"></line><polyline points="64 207.51 64 144 117.15 112.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-5"></polyline><line x1="64" y1="144" x2="131.29" y2="184" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-6"></line><polyline points="448 304.49 448 368 394.85 399.51" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-7"></polyline><line x1="448" y1="368" x2="380.71" y2="328" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-8"></line><polyline points="117.15 400 64 368 64 304.49" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-9"></polyline><line x1="64" y1="368" x2="130.64" y2="328" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-10"></line><polyline points="394.85 112.49 448 144 448 207.51" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" class="svg-elem-11"></polyline><line x1="448" y1="144" x2="380.71" y2="184" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-12"></line><polyline points="256 320 256 256 310.86 224" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-13"></polyline><line x1="256" y1="256" x2="201.14" y2="224" fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" class="svg-elem-14"></line> </svg>

      <h1 className="mb-12 text-5xl  font-bold leading-tight">
        EDU-AR
        <span className="text-zinc-400 block text-lg">
          EDU-AR provides an accessible and engaging way for children to delve into their subjects with a 360-degree perspective using only their smartphones. This innovative approach allows students to unlock their imagination and deepen their understanding of various topics in a truly interactive and dynamic manner.
        </span>
      </h1>
      <a
        href="#"
        className="p-2 flex items-center gap-2 text-white font-bold"
      >
        <Github /> Github Link
      </a>
      <a
        href="#"
        className="p-2 flex items-center gap-2 text-white font-bold"
      >
        <Award /> Second Runner up Asian Inter-college Hackathon
      </a>
    </Block>
    <SocialsBlock />
  </div>
);

const HeaderBlockTwo = () => (
  <div className="bg-gradient-to-r from-neutral-200  to-neutral-500 mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 my-6 p-5 rounded-md">
    <Block className="col-span-12 row-span-2 md:col-span-6 ">
      <Code className="mb-2 size-12  animate-bounce"  />
      <h1 className="mb-12 text-5xl  font-bold leading-tight">
        ScrappyNp
        <span className="text-zinc-400 block text-lg">
        This project is a web scraping and product comparison tool designed to help users find the lowest prices for products across multiple e-commerce platforms. Built with Puppeteer for web scraping and React for the frontend, it allows users to enter a product name and retrieve a list of relevant items from popular sites, currently including Daraz and Okdam. The application identifies and highlights the cheapest product across sources for easy comparison. Features
                </span>
      </h1>
      <a
        href="#"
        className="p-2 flex items-center gap-2 text-white font-bold"
      >
        <Github /> Github Link
      </a>
      <a
        href="#"
        className="p-2 flex items-center gap-2 text-white font-bold"
      >
        <Award /> Second Runner up Asian Inter-college Hackathon
      </a>
    </Block>
    <SocialsBlockTwo />
  </div>
);

const SocialsBlockTwo = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      onMouseEnter={() => {
        const iframe = document.getElementById('ScrappyVideo');
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }}

      className="relative col-span-12 row-span-12 md:row-span-1 md:col-span-6 bg-red-500 overflow-hidden"
    >
      {/* YouTube video embedded with iframe */}
      <iframe
        id="ScrappyVideo"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/cRQxKDFh6c0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Block>


    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 row-span-12 md:row-span-1 md:col-span-6 bg-center bg-cover bg-[url('https://private-user-images.githubusercontent.com/60820123/384686139-af520dd6-c295-48e7-af30-436c13301958.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEyNjE2NzMsIm5iZiI6MTczMTI2MTM3MywicGF0aCI6Ii82MDgyMDEyMy8zODQ2ODYxMzktYWY1MjBkZDYtYzI5NS00OGU3LWFmMzAtNDM2YzEzMzAxOTU4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTEwVDE3NTYxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY4NmY4YWRlNWY3MmUyZDE3ZjZjYjRkYjA4MGE1OGM1MWNmNjVhYzJiNGM4ZmUwZGUyZmMxOWMyMmMyOGE1YTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6-cSFGbx_94hg0YhRBHiJTxYPj9SoK48P5GmWur2gWo')] "
    ></Block>


  </>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      onMouseEnter={() => {
        const iframe = document.getElementById('hoverVideo');
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }}

      className="relative col-span-12 row-span-12 md:row-span-1 md:col-span-6 bg-red-500 overflow-hidden"
    >
      {/* YouTube video embedded with iframe */}
      <iframe
        id="hoverVideo"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/QaHvSgLLGyw?enablejsapi=1&mute=1&loop=1&playlist=QaHvSgLLGyw"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </Block>


    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-12 row-span-12 md:row-span-1 md:col-span-6 bg-center bg-cover bg-[url('https://camo.githubusercontent.com/2cbbc0722e19e982aea6f6479acef40cff5c658da911f84f5a02a65075fd653d/68747470733a2f2f7072696d652e6564752e6e702f77702d636f6e74656e742f75706c6f6164732f323032342f30372f4564752e61725f2e6a7067')] "
    ></Block>


  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <MapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <Mail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};