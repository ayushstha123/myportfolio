'use client'
import Image from "next/image";
import Nav from '../components/Nav.jsx'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  return (
    <>
      <Nav />
      <section className="flex justify-center items-center h-screen">
        <h1 ref={textRef} className="text-4xl font-bold">
          Hi , Im Ayush
        </h1>
      </section>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
    </>
  );
}