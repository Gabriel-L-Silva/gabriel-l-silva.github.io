'use client'

import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'Python',
    'API Development',
    'Software Development',
    'Computer Simulations',
    'Machine Learning',
    'Computer Vision',
    'Azure',
    'Deep Learning',
    'Robotics',
    'Computer Graphics',
    'Object-Oriented Programming',
    'SQL',
    'OpenCV',
    'PyTorch',
    'LangChain',
    'TensorFlow'
  ]

  return (
    <section id="about" className="section-padding enhanced-gradient enhanced-gradient-vertical-dark texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-center">
          <span className="heading-gradient">ABOUT ME</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[#111827]/70 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all">
            <p className="mb-4 text-lg text-gray-300">
              I am a Python Software Engineer with a strong background in Computer Engineering and over two years of hands-on AI experience. I specialize in utilizing advanced technologies such as OpenCV, PyTorch, LangChain, LangGraph, TensorFlow, and Azure to develop and deploy high-performance AI solutions.
            </p>
            <p className="text-lg text-gray-300">
              I've successfully brought projects back on track and achieved remarkable results, such as reducing margin of error from 30% to 3-5% by implementing new algorithms. I excel in fostering client relationships and presenting solutions that showcase my team's skills. Currently, I'm pursuing a Master's in Computer Science, focusing on smoke simulation using RBF-FD techniques.
            </p>
          </div>
          <div className="bg-[#111827]/70 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-900 transition-all">
            <h3 className="mb-6 text-xl font-semibold text-white">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-900/30 px-4 py-2 text-sm text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 