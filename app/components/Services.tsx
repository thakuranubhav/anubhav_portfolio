import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services"
            className="w-full px-[12%] py-10 scroll-mt-20 text-gray-200"
        >
            {/* Headings */}
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo text-gray-400"
            >
                What I offer
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo font-semibold text-blue-400"
            >
                My Services
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300 leading-relaxed"
            >
                I am a data science and machine learning engineer from IIIT Manipur, India currently entering the engineering industry with strong core skills.
            </motion.p>

            {/* SERVICES GRID */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
            >
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className="
                            bg-gray-800/60 
                            backdrop-blur-xl 
                            border border-gray-700/50 
                            rounded-lg 
                            px-8 py-12 
                            cursor-pointer
                            hover:-translate-y-1
                            hover:bg-gray-700/60 
                            hover:shadow-xl
                            transition-all duration-300
                        "
                    >
                        <Image src={icon} alt="" className="w-10 opacity-90" />

                        <h3 className="text-lg my-4 font-semibold text-gray-200">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            {description}
                        </p>

                        <Link
                            href={link || "/machine_learning_projects"}
                            className="
                                flex items-center gap-2 
                                text-sm mt-5
                                text-blue-400
                                hover:gap-3
                                transition-all duration-300
                            "
                        >
                            Read more
                            <Image src={assets.right_arrow} alt="Read more" className="w-4 invert" />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
