import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className="mt-20 pb-10 text-gray-200">   {/* added pb-10 */}

      {/* LOGO + EMAIL */}
      <div className="text-center">
        <Image 
          src={assets.m_logo} 
          alt="" 
          className="w-36 mx-auto mb-2" 
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image 
            src={assets.mail_icon} 
            alt="" 
            className="w-6 invert opacity-80" 
          />
          <span className="text-gray-300 hover:text-blue-400 transition">
            thakuranubhav867@gmail.com
          </span>
        </div>
      </div>

      {/* COPY + SOCIAL */}
      <div className="mx-[10%] mt-16 border-t border-gray-700/60 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">

          <p className="text-sm text-gray-400 tracking-wide">
            © 2025 <span className="text-gray-200 font-semibold">Anubhav</span>. All rights reserved.
          </p>

          <ul className="flex items-center gap-8 text-sm">
            {[
              { name: "GitHub", link: "https://github.com/thakuranubhav" },
              { name: "LinkedIn", link: "https://linkedin.com" },
              { name: "Instagram", link: "https://instagram.com" },
              { name: "Leetcode", link: "https://leetcode.com" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  className="
                    text-gray-400 
                    hover:text-blue-400 
                    hover:scale-110 
                    transition-all 
                    duration-300 
                    hover:underline 
                    underline-offset-4
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </div>
  )
}

export default Footer
