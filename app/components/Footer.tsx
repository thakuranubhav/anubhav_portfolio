import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo_m} alt='' className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6 mx-auto mb-2' />
                thakuranubhav867@gmail.com
            </div>
        </div>
      <div className="mx-[10%] mt-16 border-t border-gray-700 pt-6">
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
    
    <p className="text-sm text-gray-700 tracking-wide">
      © 2025 <span className="text-gray-700 font-semibold">Anubhav</span>. All rights reserved.
    </p>

    <ul className="flex items-center gap-8">
      {["GitHub", "LinkedIn", "Instagram", "Leetcode"].map((item) => (
        <li key={item}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/thakuranubhav"
            className="text-gray-700 transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:underline underline-offset-4"
          >
            {item}
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