'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  technologies: string[];
  link: string;
  proprietary?: boolean;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState<number | null>(null);
  
  const handleVideoInteraction = (index: number) => {
    if (videoPlaying === index) {
      return; // Keep video playing if already playing
    }
    setHoveredProject(index);
  }
  
  const handleVideoClick = (index: number) => {
    setVideoPlaying(index); // Set this video as playing when clicked
  }
  
  const projects: Project[] = [
    {
      title: 'Smoke Simulation Research',
      description: 'Master\'s research project developing a smoke simulation using the RBF-FD technique for more accurate and efficient simulations in computer graphics.',
      image: '/assets/project1.png',
      video: '1weFEVSf-a9KdIKKuz2Howdh24jAfcp8Z',
      technologies: ['Computer Graphics', 'Simulations', 'Mathematics', 'C++', 'Python'],
      link: 'https://github.com/Gabriel-L-Silva/stam_py',
      proprietary: false,
    },
    {
      title: 'Computer Vision Luggage Dimensioning',
      description: 'Engineered a high-precision system for real-time luggage dimensioning using RGBD camera technology on conveyor belts.',
      image: '/assets/project2.png',
      technologies: ['Computer Vision', 'YOLO', 'SAM', 'OpenCV', 'Python'],
      link: '#',
      proprietary: true,
    },
    {
      title: 'AI Chatbot with Agentic Workflow',
      description: 'Designed and developed an agentic workflow to orchestrate LLMs and provide more specific prompts for chatbot tasks.',
      image: '/assets/project3.png',
      technologies: ['LangGraph', 'LangChain', 'Python', 'AI', 'LLM'],
      link: '#',
      proprietary: true,
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-[#0a1120] to-[#111827] bg-smooth-gradient-vertical texture-overlay">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <h2 className="mb-16 text-3xl font-bold md:text-4xl text-center">
          <span className="heading-gradient">PROJECTS</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-[#111827]/70 p-6 transition-all hover:shadow-lg hover:shadow-blue-900/20 backdrop-blur-sm border border-gray-800 hover:border-blue-900"
              onMouseEnter={() => handleVideoInteraction(index)}
              onMouseLeave={() => videoPlaying !== index && setHoveredProject(null)}
            >
              <div 
                className={`relative mb-4 w-full overflow-hidden rounded-lg ${project.video ? 'h-64 md:h-72' : 'h-64 md:h-72'}`}
                onClick={() => project.video && handleVideoClick(index)}
              >
                {project.video ? (
                  <div className="relative h-full w-full">
                    {/* Always load the iframe but control visibility with CSS */}
                    <iframe
                      src={`https://drive.google.com/file/d/${project.video}/preview`}
                      width="100%"
                      height="100%"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className={`absolute inset-0 transition-opacity duration-300 ${hoveredProject === index || videoPlaying === index ? 'opacity-100 z-10' : 'opacity-0'}`}
                      title={project.title}
                    />
                    
                    {/* Show the static image when not hovering or playing */}
                    <div className={`absolute inset-0 h-full w-full bg-gray-900/30 p-3 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index || videoPlaying === index ? 'opacity-0' : 'opacity-100'}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                          {videoPlaying === index ? 'Video playing' : 'Click or hover to view demo'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Caption shown only when hovering or playing */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-center text-xs text-white transition-opacity duration-300 ${hoveredProject === index || videoPlaying === index ? 'opacity-100 z-20' : 'opacity-0'}`}>
                      RBF-FD Smoke Simulation Demo
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full bg-gray-900/30 p-3 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-blue-900/30 px-3 py-1 text-xs text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.proprietary ? (
                <div className="flex items-center text-gray-400 text-sm">
                  <LockClosedIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Proprietary project - Code not publicly available due to NDA and client confidentiality</span>
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm text-white transition-all hover:from-blue-700 hover:to-purple-700"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects 