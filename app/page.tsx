'use client'
import Nav from '../components/Nav.jsx'
import {HomeHero} from '../components/Hero.jsx'
import {SecondHero} from '../components/SecondHero.jsx'
import {LoopRight} from '../components/LoopRight.jsx'
import {Projects} from '../components/Projects.jsx'

export default function Home() {
  return (
    <>
      <Nav />
     <HomeHero/>
     <section className='bg-neutral-900'>
<LoopRight/>
</section>
      <SecondHero/>
        <Projects/>
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>
    </>
  );
}