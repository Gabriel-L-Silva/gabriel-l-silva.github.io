'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#0a1120] to-[#111827] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          <span className="heading-gradient">CONTACT ME</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#111827]/70 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">Contact Information</h3>
            <p className="mb-8 text-gray-300">
              Feel free to reach out for collaborations, job opportunities, or just a friendly hello!
            </p>
            <div className="space-y-6">
              <p className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" /> gls.facom@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-400" /> Rio de Janeiro, Brazil
              </p>
              <p className="flex items-center text-gray-300">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" /> +55 67 99294-6955
              </p>
              <p className="flex items-center text-gray-300">
                <LinkIcon className="h-5 w-5 mr-3 text-blue-400" /> 
                <a href="https://linkedin.com/in/gabriel-lucas-da-silva" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  linkedin.com/in/gabriel-lucas-da-silva
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#111827]/70 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all flex flex-col items-center justify-center"
          >
            <h3 className="mb-6 text-xl font-semibold text-white text-center">Send Me a Message</h3>
            <p className="mb-8 text-gray-300 text-center">
              Click the button below to open your email client and send me a message directly.
            </p>
            <a 
              href="mailto:gls.facom@gmail.com?subject=Contact from Portfolio Website" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-white text-center transition-all hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 mb-4"
            >
              Email Me
            </a>
            <a 
              href="/assets/Gabriel-Silva-Resume-1.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-gray-600 px-6 py-3 text-white text-center transition-all hover:bg-white/10 hover:border-blue-500 mt-2"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 