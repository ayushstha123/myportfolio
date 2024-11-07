'use client'
import Nav from '../components/Nav.jsx'
import {HomeHero} from '../components/Hero.jsx'
import {SecondHero} from '../components/SecondHero.jsx'
export default function Home() {
  return (
    <>
      <Nav />
     <HomeHero/>
      <SecondHero/>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
    </>
  );
}