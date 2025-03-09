"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/aboutbackground.png?height=800&width=1600')] bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <img
                src="/myphoto.jpeg?height=600&width=600"
                alt="Ahmed Dalhoum"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-4 shadow-xl">
              <p className="text-white font-bold">Top Rated Plus</p>
              <p className="text-white/80 text-sm">on Upwork</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Blockchain Developer & Engineer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Blockchain Developer with extensive experience creating
              NFTs, ERC20 tokens, staking systems, blockchain games, and
              implementing indexing and subgraph solutions. Throughout my
              career, I have had the opportunity to work on numerous projects,
              allowing me to design and develop my own unique methods and
              models.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I excel at leveraging my skills to create innovative solutions and
              optimize system performance. My expertise spans across Solidity,
              Hardhat Testing, Smart contracts testing, cryptography (including
              p2p encryption), Javascript, Linux, web3, Subgraph indexing,
              Golang, Python, GDScript, Machine/Deep learning, React,
              Express.js, and AWS.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-2">
                <p className="text-purple-300 font-medium">Location</p>
                <p className="text-white">Novi Pazar, Serbia</p>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-2">
                <p className="text-purple-300 font-medium">Email</p>
                <p className="text-white">dalhoum.co@gmail.com</p>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/20 rounded-lg px-4 py-2">
                <p className="text-purple-300 font-medium">Languages</p>
                <p className="text-white">
                  English (Advanced), French (Intermediate)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
