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
        <div className="bg-neutral-900 text-white min-h-screen pt-[50px] pb-[5px] lg:py-[100px]">
            <div className="h_container flex flex-col items-center px-2 pb-[20vw] lg:pb-[4vw]">
                <h1 className=" h_title  relative w-full  text-center text-[15vw] font-bold uppercase leading-[80%] lg:text-[7.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block translate-y-full pb-1.5 pt-6 will-change-transform ">
                            Fullstack &nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]">
                            <FlowerLogo />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='animate-spin-slow ease-in-out transform origin-center w-16 h-16'><path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg> */}
{/*                                                   
                            <Image src={brain}  
                            width={100}
                            height={100}
                            className='animate-bounce ease-out'
                     />  */}
                                                   </span>
                    </span>
                    <span className=" -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                        &nbsp;Developer
                        </span>
                    </span>

                </h1>
                <h1 className="h_title  relative w-full text-center text-[15vw] font-bold uppercase leading-[80%] lg:text-[7.7vw] ">
                <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='animate-spin-slow ease-in-out transform origin-center w-16 h-16'><path fill="white" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg>
                            </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;That
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                          &nbsp; loves to build
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Brands&nbsp;
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className='animate-spin-slow transform origin-center w-16 h-16'><path fill="currentColor" d="m16 0 1.603 8.457 4.905-7.074-1.975 8.378 7.357-4.467-5.211 6.85 8.538-1.088-7.547 4.138 8.242 2.478-8.578.711L29.856 24l-8.125-2.84 3.674 7.784-6.268-5.899.19 8.605L16 23.712l-3.327 7.938.19-8.605-6.268 5.9 3.674-7.785L2.144 24l6.521-5.617-8.577-.71 8.242-2.48-7.547-4.137 8.538 1.088-5.211-6.85 7.357 4.467-1.975-8.378 4.905 7.074L16 0Z"></path></svg> */}
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative  w-full text-center text-[15vw] font-bold uppercase leading-[90%] lg:text-[7.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            People&nbsp;
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Love
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative w-full text-center text-[15vw] font-bold uppercase leading-[90%] lg:text-[7.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="font_aeonik inline-block  translate-y-full pb-1.5  pt-6    font-medium leading-[81%] text-orange will-change-transform ">
                            By Loving
                        </span>
                    </span>
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            &nbsp;Your
                        </span>
                    </span>
                </h1>
                <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-bold uppercase leading-[90%] lg:flex-row lg:text-[7.7vw] ">
                    <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
                        <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                            Audience
                        </span>
                    </span>
                </h1>
            </div>
           
        </div>
    );
};