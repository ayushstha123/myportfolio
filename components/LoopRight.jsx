import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";
import brain from './brain.png'

import Image from "next/image";
import React, { useRef } from "react";

export const LoopRight = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start ", "end start"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
        scrollVelocity,
        [0, 0],
        ["0deg", "0deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 1, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -6500]);

    // Apply damping and lower stiffness for slower motion
    const x = useSpring(xRaw, { mass: 1, stiffness: 500, damping: 250 });

    return (
        <section
            ref={targetRef}
            className="h-[270vh]  border-dashed border-x-8 bg-neutral-900 text-neutral-100 rounded-full mx-8 hover:transition-all hover:mx-0 border-neutral-600  transition-all "
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.p
                    style={{ skewX, x }}
                    className="origin-bottom-left whitespace-nowrap  font-bold md:text-[20vw]  leading-[0.85] text-7xl md:leading-[0.85]"
                > Design<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" className="inline-block w-96 fill-green-400 rotate-45" ><path d="M109.7 257.6s433.6 432.9 665.7 0c-217.3-467.1-665.7 0-665.7 0Z"></path><path d="M890.1 254.4a6 6 0 0 0-7.4-3.9c-.4.1-37.8 11.2-106.5 2.3-249.7-32.5-438.6-8.9-440.5-8.6a5.8 5.8 0 0 0-5.1 6.7 6 6 0 0 0 6.7 5.2c1.9-.2 189.4-23.7 437.4 8.6a407 407 0 0 0 53.2 3.6c37.3 0 57.2-6 58.3-6.3a6 6 0 0 0 3.9-7.4Z" fill="#FFFFFF"></path></svg></span>
                    ,
                    <span className="bg-white text-black">Build</span>&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" className="inline-block w-32" fill="white"><path d="M0 240v240h240A240 240 0 0 0 0 240ZM240 480h240V240a240 240 0 0 0-240 240ZM240 0H0v240A240 240 0 0 0 240 0ZM240 0a240 240 0 0 0 240 240V0H240Z"></path></svg>,
                    and Innovate
                    <Image
                        src={brain}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="inline"
                    />
                    <span className="bg-white text-black ">
                        from Imagination
                    </span>
                </motion.p>
            </div>
        </section>
    );
};