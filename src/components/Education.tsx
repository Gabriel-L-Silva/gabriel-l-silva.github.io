'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const Education = () => {
  const educations = [
    {
      degree: 'Master of Science in Computer Graphics',
      institution: 'Instituto De Ciências Matemáticas e de Computação (ICMC) - USP',
      period: 'Expected: 01/2025',
      description: 'Working on developing a smoke simulation using the RBF-FD technique, which leverages radial basis functions to discretize the partial differential equations governing smoke behavior.'
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Universidade Federal De Mato Grosso Do Sul',
      period: 'Completed: 01/2021',
      description: 'Specializing in designing, developing, and implementing hardware and software solutions across various applications with expertise in programming, embedded systems, computer networks, and artificial intelligence.'
    }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-[#111827] to-[#0a1120] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-center">
          <span className="heading-gradient">EDUCATION</span>
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-fuchsia-500 to-pink-500 transform -translate-x-1/2 z-0" />
          
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left content (or right when reversed) */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className={`rounded-xl bg-[#111827]/70 p-8 backdrop-blur-sm border border-gray-800 hover:border-purple-900 transition-all ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg`}>
                  <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="mb-2 text-lg text-purple-400">{edu.institution}</p>
                  <p className="mb-4 text-sm text-gray-400">{edu.period}</p>
                  <p className={`text-gray-300 text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'} leading-relaxed`}>
                    {edu.description}
                  </p>
                </div>
              </div>
              
              {/* Center icon */}
              <div className="relative flex-shrink-0 w-0">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 flex items-center justify-center z-10">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Right content (or left when reversed) - Empty */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education 