'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="section-padding flex min-h-screen flex-col items-center justify-center md:flex-row bg-gradient-to-b from-[#0a1120] to-[#111827] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 flex-col items-start justify-center gap-5"
      >
        <h1 className="text-4xl font-bold md:text-6xl">
          Hi, I'm <span className="heading-gradient">Gabriel Lucas da Silva</span>
        </h1>
        <h2 className="text-2xl text-white md:text-3xl">
          Python Backend Software Engineer
        </h2>
        <p className="max-w-md text-lg text-gray-300">
          Brazilian-based Python Software Engineer with a strong background in Computer
          Engineering and AI experience. Passionate about developing solutions that improve 
          the planet and leave a legacy of kindness and hope for future generations.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:gls.facom@gmail.com?subject=Contact from Portfolio Website"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white transition-all hover:from-blue-700 hover:to-purple-700"
          >
            Contact Me
          </a>
          <a
            href="/assets/Gabriel-Silva-Resume-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-600 px-6 py-3 text-white transition-all hover:bg-white/10 hover:border-blue-500"
          >
            View Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 flex-1 md:mt-0 flex justify-center items-center"
      >
        <div className="profile-image-container">
          <div className="relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] rounded-full overflow-hidden border-4 border-gray-800 bg-gradient-to-b from-blue-600/20 to-purple-600/20">
            <Image
              src="/assets/hero-image.png"
              alt="Gabriel Lucas da Silva"
              fill
              className="object-cover object-center"
              style={{ objectPosition: '50% 30%' }}
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero