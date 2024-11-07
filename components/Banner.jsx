import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Register the CustomEase plugin
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const Banner = () => {
  const heroInfiniteRef = useRef(null);
  const titleRefs = useRef([]); // Array to store references to each title element

  useEffect(() => {
    // Initialize GSAP timeline with custom ease function
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titleRefs.current.forEach((title, index) => {
      const elements = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        elements,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    // Animate the heroInfiniteRef element after 1.2 seconds
    tl.to(
      heroInfiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      1.2
    );

    return () => {
      tl.kill(); // Clean up GSAP timeline on component unmount
    };
  }, []);

  return (
    <div className='pt-10'>
      {/* Title container */}
      <div
        ref={heroInfiniteRef}
        className=" absolute bottom-[-25vw] left-[35%] ml-10 -mr-10 h-8 w-40 overflow-hidden rounded-full border border-black text-xs font-normal uppercase opacity-0 lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl lg:leading-10"
      >
        <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
          {/* Titles for GSAP animations */}
          <span ref={(el) => (titleRefs.current[0] = el)} className="group-hover:pause animate-loopL">
            See My Latest Projects &nbsp;
          </span>
          <span ref={(el) => (titleRefs.current[1] = el)} className="group-hover:pause animate-loopL">
           See My Latest Projects&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};
