"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import React, { useState, FormEvent } from 'react'

function Contact() {
  const [result, setResult] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [textf, setTextf] = useState("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8efbbf22-86b2-4799-aef1-5f43a1316ac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult("Sending message...");
    setResult(data.success ? "Message sent successfully!" : "Error sending message.");
    setName("");
    setEmail("");
    setTextf("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 text-gray-200"
    >

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-400"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo font-semibold text-blue-400"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-300 leading-relaxed"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please write in the form below.
      </motion.p>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >

        {/* INPUT ROW */}
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">

          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
               flex-1 p-3
    outline-none
    bg-gray-700/70
    border border-gray-500 
    rounded-lg
    text-gray-100
    placeholder-gray-300
    focus:border-blue-400
    focus:bg-gray-700
    shadow-inner
    transition
              "
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />

          <motion.input
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
                flex-1 p-3
    outline-none
    bg-gray-700/70
    border border-gray-500 
    rounded-lg
    text-gray-100
    placeholder-gray-300
    focus:border-blue-400
    focus:bg-gray-700
    shadow-inner
    transition
              "
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>

        {/* MESSAGE BOX */}
        <motion.textarea
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          value={textf}
          onChange={(e) => setTextf(e.target.value)}
          className="
               w-full p-4
    outline-none
    bg-gray-700/70
    border border-gray-500 
    rounded-lg
    text-gray-100
    placeholder-gray-300
    focus:border-blue-400
    focus:bg-gray-700
    shadow-inner
    transition
            "
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
        ></motion.textarea>

        {/* SUBMIT BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="
            py-3 mt-6 px-10 
            w-max mx-auto flex items-center gap-2
            bg-blue-500/80 hover:bg-blue-500 
            text-white font-semibold
            rounded-full shadow-lg
            transition-all
          "
          type="submit"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        {/* RESULT MESSAGE */}
        <motion.p
          className="mt-2 text-center text-gray-300 font-medium"
        >
          {result}
        </motion.p>
      </motion.form>

    </motion.div>
  )
}

export default Contact
