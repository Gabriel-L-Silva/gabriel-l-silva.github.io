'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Skill {
  name: string;
  icon: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { 
      name: 'Python', 
      icon: '/assets/skills/Python.svg'
    },
    { 
      name: 'OpenCV', 
      icon: '/assets/skills/OpenCV.svg'
    },
    { 
      name: 'PyTorch', 
      icon: '/assets/skills/PyTorch.svg'
    },
    { 
      name: 'TensorFlow', 
      icon: '/assets/skills/TensorFlow.svg'
    },
    { 
      name: 'Azure', 
      icon: '/assets/skills/Azure.svg'
    },
    { 
      name: 'LangChain', 
      icon: '/assets/skills/langchain.svg'
    },
    { 
      name: 'GitHub', 
      icon: '/assets/skills/GitHub.svg'
    },
    { 
      name: 'C++', 
      icon: '/assets/skills/C++ (CPlusPlus).svg'
    },
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-[#111827] to-[#0a1120] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl text-center"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          <span className="heading-gradient">SKILLS</span>
        </h2>
        
        <h3 className="mb-16 text-2xl text-white">
          The skills, tools and technologies I use:
        </h3>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-16 gap-x-8 md:gap-x-12 max-w-5xl mx-auto px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <p className="text-sm text-white/90">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 