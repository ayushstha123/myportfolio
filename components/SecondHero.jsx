import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {Banner} from './Banner.jsx'

export const SecondHero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        // Set up an IntersectionObserver to trigger animation when the title comes into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elements = titleRef.current.querySelectorAll('.h_title span span');

                        // Animate each inner span using GSAP
                        gsap.to(elements, {
                            y: 0,
                            opacity: 1,
                            duration: 1.5,
                            stagger: 0.1,
                            ease: 'power4.out',
                        });

                        observer.disconnect(); // Stop observing once the animation has played
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the title is visible
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect(); // Clean up the observer on component unmount
    }, []);

    return (
        <section className='bg-neutral-900   text-white min-h-screen  lg:py-[100px]'>
            <div className="bg-neutral-800 text-white m-5 rounded  flex flex-row justify-between items-center">
                <div className="flex flex-col items-start px-2 pb-[20vw] lg:pb-[4vw]">
                    <h1
                        ref={titleRef}
                        className="md:pt-16 h_title relative w-full  text-[15vw] font-bold leading-[80%] lg:text-[8.7vw]"
                    >
                        <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                            <span className=" text-neutral-100 font-bold inline-block translate-y-full pb-1.5 pt-6 opacity-0">
                                Hello &nbsp;
                                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                                    <span className=" text-neutral-100 font-bold inline-block translate-y-full pb-1.5 pt-6 opacity-0">
                                        I'm Ayush Shrestha 🖖 &nbsp;
                                        <Banner/>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </h1>
                </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quia ex omnis repudiandae ut repellat in commodi sapiente molestiae eius?</p>
            </div>
            </div>
        </section>
    );
};
