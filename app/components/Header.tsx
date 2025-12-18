import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Header() {
  return (
    <div className="
      w-11/12 max-w-3xl text-center mx-auto h-screen 
      flex flex-col items-center justify-center gap-4
      text-gray-200
    ">
      
      {/* Profile Image */}
      <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring',stiffness:100}}>
        <Image 
          src={assets.profile_me} 
          alt="profile_img" 
          className="rounded-full w-32 border border-gray-700 shadow-lg"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{y: -20, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay: 0.3}} 
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi ! I'm Anubhav Kumar Thakur
        <Image src={assets.hand_icon} alt="" className="w-6 invert" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{y: -30, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8, delay: 0.5}} 
        className="text-4xl font-Ovo font-semibold text-blue-400"
      >
        Data Science Engineer
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay: 0.7}} 
        className="max-w-2xl mx-auto font-Ovo text-gray-300 leading-relaxed"
      >
        I am a data science engineer from Bengalore, India with 2 years of experience in multiple companies like Google, PayPal.
      </motion.p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        
        {/* Contact Button */}
        <motion.a 
          initial={{y: 30, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6, delay: 1}}
          href="#contact"
          className="
            px-10 py-3 rounded-full 
            bg-blue-500/80 hover:bg-blue-500 transition
            text-white font-medium tracking-wide
            shadow-md flex items-center gap-2
          "
        >
          contact me 
          <Image src={assets.right_arrow_white} alt=" " className="w-4" />
        </motion.a>

        {/* Resume Button */}
        <motion.a 
          initial={{y: 30, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6, delay: 1.2}}
          href="/Anubhav_Kumar_Thakur_Resume_web.pdf" 
          download 
          className="
            px-10 py-3 rounded-full 
            bg-gray-800/50 border border-gray-600 
            hover:bg-gray-700/60 transition
            text-gray-200 flex items-center gap-2
            shadow-sm
          "
        >
          my resume 
          <Image src={assets.download_icon} alt=" " className="w-4 invert" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
