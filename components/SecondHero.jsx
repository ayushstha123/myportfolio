import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const SecondHero = () => {
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
        <section className='bg-neutral-900 text-white min-h-screen pt-[50px] pb-[5px] lg:py-[100px]'>

            <div className=' px-10 font-extrabold group  overflow-hidden flex flex-col cursor-crosshair '>
                <span className=' -rotate-6 text-neutral-100 inline-block pt-2 text-9xl md:text-[16vw]  '>
                <span className="inline-block overflow-hidden align-bottom">
                            <span className=" underline tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] ">
                                Who Am i ?

                            </span>
                        </span>
                    <h1 className=" h_titleNav relative text-end text-[15vw] lg:text-[3.7vw] ">
                        <span className=" inline-block overflow-hidden align-bottom p-12">
                            <span className=" py-5 tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] ">
                                आयुषको बारे सानो विवरण

                            </span>
                        </span>
                    </h1>                </span>

            </div>
            <div ref={titleRef} className="h_title px-8 overflow-hidden">
                <h1 className="text-5xl text-neutral-100 font-bold">
                    {/* Wrap each word or line in spans for individual animation */}
                    <span className="inline-block py-6 opacity-0 rotate-3 translate-y-full" >
                        I am a passionate full-stack                             
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='animate-spin-slow inline ease-in-out transform origin-center w-16 h-16'><path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
                         web developer with expertise in  front-end development,
                        <svg xmlns="http://www.w3.org/2000/svg" className='animate-spin-diff inline-block w-16 h-16 fill-neutral-200 mx-4' viewBox="0 0 480 480" ><path d="M240 240A240 240 0 0 0 0 480a240 240 0 0 0 240-240ZM240 240A240 240 0 0 0 0 0a240 240 0 0 0 240 240ZM480 0a240 240 0 0 0-240 240A240 240 0 0 0 480 0ZM480 480a240 240 0 0 0-240-240 240 240 0 0 0 240 240Z"></path></svg>

                        Graphics Design, and back-end technologies like SQL, Postgres.
                    </span>
                    <span className='opacity-0 translate-y-full bg-fractal-noise-white text-end p-2 m-2 inline-block leading-2  text-black bg-border'> I thrive on learning new technologies and pushing the boundaries of my skills, always looking to grow in the ever-evolving tech landscape.</span>
                </h1>
            </div>
        </section>
    );
};
