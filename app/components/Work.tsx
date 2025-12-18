import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

const MotionLink = motion(Link)

function Work() {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id='work'  
      className="w-full px-[12%] py-10 scroll-mt-20 text-gray-200"
    >

      {/* Headings */}
      <motion.h4
        initial={{opacity:0,y: -20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}} 
        className="text-center mb-2 text-lg font-Ovo text-gray-400"
      >
        My portfolio
      </motion.h4>

      <motion.h2 
        initial={{opacity:0,y: -20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl font-Ovo font-semibold text-blue-400"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}} 
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300 leading-relaxed"
      >
        Welcome to my machine learning portfolio! Explore a collection of projects showcasing my expertise in machine learning.
      </motion.p>

      {/* WORK GRID */}
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.9}} 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5"
      >
        {workData.map((project,index)=>(
          <motion.div
            whileHover={{scale:1.05}} 
            transition={{duration:0.3}}
            key={index} 
            className="
              aspect-square bg-no-repeat bg-cover bg-center 
              rounded-lg relative cursor-pointer group overflow-hidden
              shadow-lg shadow-black/30
            "
            style={{backgroundImage:`url(${project.bgImage.src})`}}
          >
            {/* Overlay info */}
            <div
              className="
                bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 
                w-10/12 rounded-md absolute bottom-5 left-1/2 
                -translate-x-1/2 py-4 px-5 flex items-center justify-between 
                duration-500 group-hover:bottom-7
              "
            >
              <div>
                <h2 className="font-semibold text-gray-200">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {project.description}
                </p>
              </div>

              <div 
                className="
                  border border-gray-600 rounded-full w-9 aspect-square 
                  flex items-center justify-center shadow-lg
                  hover:bg-blue-500 transition overflow-hidden
                "
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5 invert" />
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* SEE MORE BUTTON */}
      <MotionLink 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:1.1}} 
        href="/additional_projects" 
        className="
          w-max flex items-center justify-center gap-2 
          text-gray-200 border border-gray-700 rounded-full 
          py-2 px-10 mx-auto my-20 
          hover:bg-blue-800/70 hover:shadow-xl hover:-translate-y-1
          transition-all duration-300
        "
      >
        Show more 
        <Image src={assets.right_arrow_bold} alt='right arrow' className="w-4 invert" />
      </MotionLink>

    </motion.div>
  )
}

export default Work
