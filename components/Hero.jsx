import React, { useEffect } from 'react';
import { FlowerLogo } from './Icons';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import Image from 'next/image';
import brain from './brain.png'
gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
    useEffect(() => {
        const titles = document.querySelectorAll('.h_title');
        const tl = gsap.timeline({ defaults: { duration: 1 } });

        titles.forEach((title, index) => {
            const el = title.querySelectorAll('span span');
            const delay = index * 0.08;

            tl.to(
                el,
                {
                    y: 0,
                    duration: 1.5,
                    ease: 'cubic-text',
                },
                delay
            );
        });

        return () => { };
    }, []);

    return (
        // Bringing Ideas to Life Through Beautiful Code & Seamless Design
        <div className="bg-neutral-900   text-white min-h-screen pt-[50px] pb-[5px] lg:py-[100px]">
            <div className="  flex flex-col items-center px-2 pb-[20vw] lg:pb-[4vw]">
                <h1 className="md:pt-16 h_title  relative w-full text-center text-[15vw] font-bold  leading-[80%] lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" bg-neutral-300 text-neutral-800 inline-block translate-y-full pb-1.5 pt-6 will-change-transform ">
                        Fullstack
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[5.9vw]">
                            {/* <FlowerLogo /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='animate-spin-slow ease-in-out transform origin-center w-16 h-16'><path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
                            {/*                                                   
                            <Image src={brain}  
                            width={100}
                            height={100}
                            className='animate-bounce ease-out'
                     />  */}
                        </span>
                    </span>
                    <span className=" -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" underline inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Developer
                        </span>
                    </span>

                </h1>
                <h1 className="h_title pt-8 relative w-full text-center text-[15vw] font-bold  leading-[80%] lg:text-[7.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;that
                        </span>
                    </span>
                    <span className=" -mb-1.5 -mt-6 text-neutral-400 inline-block overflow-hidden align-bottom">
                        <span className=" underline  tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)]  font-extrabold  inline-block  translate-y-full pb-1.5  pt-6  leading-[81%] will-change-transform ">
                            &nbsp;loves

                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">

                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className='z-10 w-16 h-16' viewBox="0 0 360 360" fill="#ff69b4"><path d="M318.9 87c-4.8-124.8-111.8-37.7-139.8 28C151-38.8 20.3 39.8 43.7 140.2c6.6 28.3 91.6 178.6 119.6 195.6 3.4 2.1 8-2 20-14 40.5-34.4 141-148 135.6-234.8zm-72.6 138.8c-17.6 25.2-82.4 89.9-82.3 90.1-33.2-43-98.7-144.1-106.8-197.9-2.6-17.2 5-34.7 15.2-48.6 43.2-57.9 77.2-7.9 87.9 43.6 7.1 25.9 6 26.3 7.9 29.2 3.3 5 10.2 6.2 15.3 1.6 3.6-6.7 45.3-94.5 91.1-103.8 9.1-2.1 16.7 4 20.6 12 3.2 8 4 15 5 23 7.1 53.6-23.9 107.8-53.9 150.8z"></path></svg>

                        </span>
                    </span>

                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">

                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                             &nbsp;to build
                        </span>
                    </span>
                    <span className="rotate-3 -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="-inset-1italic  inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
                            <svg className='animate-spin-diff transform w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="#FFFFFF"><path d="m240 240 160-80v-.7A79.8 79.8 0 0 0 320.7 80h-.7l-80 160ZM240 240 160 80h-.7A79.8 79.8 0 0 0 80 159.3v.7l160 80ZM240 240l80 160h.7a79.8 79.8 0 0 0 79.3-79.3v-.7l-160-80ZM240 240 80 320v.7a79.8 79.8 0 0 0 79.3 79.3h.7l80-160ZM240 240l169.7 56.6.5-.5a79.8 79.8 0 0 0 0-112.2l-.5-.5L240 240ZM240 240l56.6-169.7-.5-.5a79.8 79.8 0 0 0-112.2 0l-.5.5L240 240ZM240 240l-56.6 169.7.5.5a79.8 79.8 0 0 0 112.2 0l.5-.5L240 240ZM240 240 70.3 183.4l-.5.5a79.8 79.8 0 0 0 0 112.2l.5.5L240 240Z"></path></svg>
                        </span>
                    </span>
                    {/* <svg className='animate-spin-slow ease-in-out transform w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="#FFFFFF"><path d="m240 240 160-80v-.7A79.8 79.8 0 0 0 320.7 80h-.7l-80 160ZM240 240 160 80h-.7A79.8 79.8 0 0 0 80 159.3v.7l160 80ZM240 240l80 160h.7a79.8 79.8 0 0 0 79.3-79.3v-.7l-160-80ZM240 240 80 320v.7a79.8 79.8 0 0 0 79.3 79.3h.7l80-160ZM240 240l169.7 56.6.5-.5a79.8 79.8 0 0 0 0-112.2l-.5-.5L240 240ZM240 240l56.6-169.7-.5-.5a79.8 79.8 0 0 0-112.2 0l-.5.5L240 240ZM240 240l-56.6 169.7.5.5a79.8 79.8 0 0 0 112.2 0l.5-.5L240 240ZM240 240 70.3 183.4l-.5.5a79.8 79.8 0 0 0 0 112.2l.5.5L240 240Z"></path></svg>                        */}
                </h1>
                <h1 className=" h_title relative pt-5 w-full text-center text-[15vw] font-bold leading-[80%] lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" italic inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            <Image src={brain}
                                width={100}
                                height={100}
                                className=' inline-block animate-bounce ease-out'
                            />Creative&nbsp;
                        </span>
                    </span>
                    <span className="  hover:animate-spin-diff -rotate-12 delay-700 -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font-extrabold inline-block bg-opacity-100 translate-y-full pb-1.5 pt-6 will-change-transform">
                            &
                        </span>
                    </span>
                    <span className="rotate-3 -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="-inset-1italic bg-slate-300 inline-block translate-y-full pb-1.5 text-black pt-6 will-change-transform">
                            &nbsp;Innovative
                        </span>
                    </span>
                </h1>
                <h1 className=" h_title relative w-full text-center text-[15vw] leading-[90%] lg:text-[8.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" tracking-tight 
        animate-shine !bg-clip-text text-transparent
       [background:radial-gradient(circle_at_center,theme(colors.primary.900_/_85%),transparent)_-200%_50%_/_200%_100%_no-repeat,theme(colors.primary.100)] underline  font-extrabold  inline-block  translate-y-full pb-1.5  pt-6  leading-[81%] will-change-transform ">
                            Solutions


                        </span>

                    </span>


                    
                </h1>
            </div>

        </div>
    );
};