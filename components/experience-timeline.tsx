"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Warden Labs",
    position: "Financial Engineer",
    period: "02/2025 – Present",
    description: [
      "Leading the development of sophisticated decentralized trading strategies utilizing advanced blockchain technologies and DeFi protocols.",
      "Designing and implementing machine learning agents capable of autonomous trade execution with optimized performance across various market conditions.",
      "Conducting in-depth research on market patterns and developing predictive models to enhance trading algorithm efficiency and profitability.",
      "Integrating risk management frameworks within the trading systems to ensure capital preservation while maximizing returns.",
      "Collaborating with cross-functional teams to continuously improve system architecture and trading strategy performance through iterative testing and optimization.",
    ],
  },
  {
    company: "Noti.io",
    position: "Senior Backend & Blockchain Engineer",
    period: "09/2024 – Present",
    description: [
      "At noti.io, we are committed to creating a high-quality automated sniper bot creation service. This service empowers users to develop profitable and secure sniper bots.",
      "As a developer and researcher at noti.io, my mission is to:",
      "- Develop cutting-edge techniques for rapid token simulation before each purchase.",
      "- Simulate potential actions token owners might take before a snipe.",
      "- Create intelligent mechanisms that filter out scam tokens by identifying common patterns within their bytecode.",
      "- Implement robust rugpull protection mechanisms to safeguard user investments.",
    ],
  },
  {
    company: "Kreativstorm",
    position: "Instructor",
    period: "02/2024 – Present",
    description: [
      "At Kreativstorm, our commitment lies in offering an enriching learning journey that effectively connects academic knowledge with hands-on industry training. We acknowledge the evolving job market's demand for specific skills and expertise that can solely be acquired through practical experience and tackling real-world business obstacles.",
    ],
  },
  {
    company: "BonusTradeAI",
    position: "Senior Backend/Blockchain Engineer",
    period: "10/2023 – 09/2024",
    description: [
      "Developed an indexer for trading data on Ethereum, Polygon, BSC, Optimism, and others, with a unique method to detect swaps via any router, not limited to Uniswap, using swap signatures.",
      "Created many algorithms to assess wallet profitability over different periods: 1 hour, 1 day, 1 month, and 1 year.",
      "Implemented advanced techniques for efficient search in large trade databases using parallel and recursive methods.",
      "Developed a scoring system for evaluating each wallet's performance.",
      "Applied security measures like throttling to protect our APIs from attacks.",
      "Utilized interpolations and other techniques to visualize data in a presentable and informative manner.",
    ],
  },
  {
    company: "DEM3",
    position: "Senior Software Engineer",
    period: "11/2022 – 10/2023",
    description: [
      "Developing and maintaining a secure and efficient smart contract infrastructure to facilitate logging and managing all user sessions, ensuring the highest level of data security and privacy.",
      "Utilizing various AWS services such as Amplify, DynamoDB, and AppSync to build, deploy, and manage scalable and reliable applications, significantly enhancing our system's overall performance.",
      "Implementing a robust peer-to-peer key sharing mechanism for private group communications, enabling users to securely exchange sensitive information without compromising privacy.",
      "Collaborating with cross-functional teams to identify potential security vulnerabilities and develop strategies to mitigate risks, resulting in a more secure and resilient application environment.",
      "Continuously monitoring and updating system security measures in response to evolving threats and industry best practices, safeguarding the platform's integrity and user trust.",
    ],
  },
  {
    company: "Golden Boy Software",
    position: "Fullstack Developer",
    period: "08/2021 – 08/2022",
    description: [
      "Heavily engaged in cryptocurrency trading within the financial markets as independent contractors for proprietary trading firms, utilising emotional intelligence and effective communication skills.",
      "Managed blockchain transactions using web3.js and Web3 technology in the past, ensuring the efficient execution of financial operations.",
      "Conducted cryptocurrency trading activities as part of past independent contracting responsibilities, demonstrating proficiency in proprietary trading strategies and financial market dynamics.",
    ],
  },
  {
    company: "DX Software",
    position: "Blockchain Developer",
    period: "11/2021 – 09/2022",
    description: [
      "Designed and implemented smart contract-based systems, crafted blockchain assets like NFTs and ERC20 tokens, and delivered blockchain training as a Blockchain Developer and Educator at DX Software.",
      "Played a pivotal role in the development and deployment of smart contracts, overseeing NFTs for various use cases, and facilitating DeFi applications.",
      "Collaborated effectively with cross-functional teams to translate user requirements into innovative blockchain solutions, thereby enhancing user satisfaction and driving platform adoption.",
      "Conducted comprehensive blockchain education and training sessions to foster a deeper understanding of the technology and its potential applications.",
    ],
  },
  {
    company: "Viral Crypto",
    position: "Solidity Engineer",
    period: "04/2021 – 11/2021",
    description: [
      "Conducted audits on smart contracts to identify and rectify reentrancy and logic flaws as a Solidity Engineer at Viral Crypto.",
      "Created and deployed NFT collections named Kimono, Katana, and Kabuto on OpenSea, utilizing Pinata for metadata and image hosting.",
      "Implemented connection logic, enabling the provision of three 50% discounts for minting other NFTs and offering a free mint after Kimono minting.",
      "Utilized Merkle tree technology to establish zero-knowledge proof airdrops and developed ERC20 tokens featuring a Merkle tree airdrop, dividend tracker, and gradually unlocking vesting schedule.",
      "Played a pivotal role in enhancing user engagement and cultivating a fair and transparent token economy through my contributions.",
    ],
  },
  {
    company: "PIXEMANTIC",
    position: "AI R&D",
    period: "05/2020 – 04/2021",
    description: [
      "Conducted thorough analysis of banking data used by financial platforms. My focus was on extracting intricate patterns within the data, facilitating the creation of predictive models",
      "Developed advanced predictive models capable of not only forecasting outcomes but also providing insights into the rationale behind each decision made by the AI system.",
      "Undertook projects involving Optical Character Recognition (OCR) technology. I worked on developing OCR solutions that could accurately interpret and convert text from images and documents.",
    ],
  },
];

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 sm:mb-16 ${
                index % 2 === 0
                  ? "sm:pr-12 sm:text-right sm:ml-auto sm:mr-0"
                  : "sm:pl-12"
              } sm:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-auto sm:right-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transform -translate-y-1/2 sm:translate-x-1/2"></div>

              <div
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg ${
                  index % 2 === 0 ? "sm:mr-6" : "sm:ml-6"
                }`}
              >
                <div className="flex items-center mb-4 justify-between sm:justify-start">
                  <h3 className="text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <div className="flex items-center text-purple-400 text-sm ml-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
                  <p className="text-lg font-medium text-gray-300">
                    {exp.position}
                  </p>
                </div>
                <div className="text-gray-400">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="mb-2">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
