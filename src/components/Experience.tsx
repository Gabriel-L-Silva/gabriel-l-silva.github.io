'use client'

import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  const experiences = [
    {
      title: 'Python Backend Software Engineer',
      company: 'Citric Sheep',
      period: '02/2024 - Present',
      description: [
        'Working as a Python Backend Software Engineer',
        'Developing and maintaining backend systems',
        'Implementing best practices in software development'
      ],
    },
    {
      title: 'Data Engineer',
      company: 'AI Solutions',
      period: '05/2023 - 02/2024',
      description: [
        'Engineered a high-precision computer vision system for real-time luggage dimensioning using RGBD camera technology',
        'Improved measurement accuracy from 30% error margin to 3-5% using YOLO, SAM, OpenCV, and custom depth-based algorithms',
        'Developed a chatbot system using LangGraph and LangChain to orchestrate LLMs for more specific prompts',
        'Enhanced and optimized testing for database migration, implementing automated solutions that reduced development time by ~15%'
      ],
    },
    {
      title: 'Frontend Software Engineer',
      company: 'ENGETEC MEDICAL',
      period: '01/2020 - 06/2020',
      description: [
        'Developed the front end in Flutter for an electronic time-tracking app',
        'Implemented five pages in 2 months in a collaborative team environment',
        'Developed scalable and maintainable code, ensuring long-term stability of the software'
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-[#0a1120] to-[#111827] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-center">
          <span className="heading-gradient">MY EXPERIENCE</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 transform -translate-x-1/2 z-0" />
          
          {experiences.map((exp, index) => (
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
                <div className={`rounded-xl bg-[#111827]/70 p-8 backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg`}>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="mb-2 text-lg text-blue-400">{exp.company}</p>
                  <p className="mb-4 text-sm text-gray-400">{exp.period}</p>
                  <ul className={`space-y-2 text-gray-300 text-sm ${index % 2 === 0 ? 'text-right list-inside' : 'text-left list-inside'}`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Center icon */}
              <div className="relative flex-shrink-0 w-0">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center z-10">
                  <BriefcaseIcon className="h-6 w-6 text-white" />
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

export default Experience 