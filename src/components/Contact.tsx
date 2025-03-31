'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
            className="bg-[#111827]/70 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-black/40 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-black/40 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg bg-black/40 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-white transition-all hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 