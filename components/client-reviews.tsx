"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Anton Thomas",
    position: "CEO, Kali (US)",
    review:
      "Ahmed did a quality job of auditing our DEX smart contract code. He drafted a professional audit of our contracts, identifying possible vulnerabilities",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Darren Bond",
    position: "Founder, Gamesoft (UK)",
    review:
      "Ahmed provided us with expert support on blockchain app design and development, including deep knowledge of on-chain metrics and AWS database design.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Iulian Doroftei",
    position: "Founder (Romania)",
    review:
      "We were very pleased with the work done by Ahmed and the way he handled the job from start to finish. He understood exactly what we needed and delivered promptly. We will definitely collaborate with him again!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Chris Crecelius",
    position: "Product Manager, AXGT (US)",
    review:
      "Ahmed is an Excellent Developer who is very knowledgeable, prompt, trustworthy (cannot be understated), and easy to work with, we highly recommend him! He's a self-starter with a keen ability to problem solve and explain the process. He helped us to get past a particular challenge, helping us achieve our goals",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Vishal Khialani",
    position: "CTO, Nlstech (India)",
    review:
      "Ahmed is a hard worker and is very knowledgeable in solidity, crypto, and AWS. I would like to work with him in the near future",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Yuriy Kolomiec",
    position: "GreatApps (Ukraine)",
    review:
      "Thank you very much, very professional work, completed in the shortest possible time! I highly recommend Ahmed!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Tony Tetra",
    position: "(Kazakhstan)",
    review:
      "Ahmed quickly and efficiently made a smart contract, provided full support and showed myself as a high-level professional. I highly recommend cooperating with Ahmed.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Leon Yohai",
    position: "Founder (US)",
    review:
      "Ahmed is extremely smart, a great communicator and a great developer. He worked with us creatively to find solutions and delivered a result that exceeded our expectations. He went above and beyond to be available when needed and responded very quickly. Ahmed is a great person to work with all around. I highly recommend Ahmed.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Ebrahim Mutahar",
    position: "Founder, Modbox (US)",
    review:
      "The Best and Recommended Ahmed is good and also he knows what to do with a committed performance",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Todor Vachev",
    position: "Founder, Vachev Engineering Ltd (Bulgaria)",
    review:
      "Ahmed managed to quickly audit my contract and point out the problems. He also managed to figure out a way to exploit the contract and was able to show a reproducible example and also helped in securing our minting process. I would highly recommend him",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Talha Naveed",
    position: "Viral Crypto (UK)",
    review:
      "Very professional and proficient. Great support and was able to answer our questions. Fantastic understanding of solidity smart contracts. Look forward to working with you again in the future! Thank you!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function ClientReviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section
      id="reviews"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Client Reviews
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-400">{review.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-500/30" />
                  <p className="text-gray-300 pl-4">{review.review}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/10 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {reviews[activeIndex].name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {reviews[activeIndex].position}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-500/30" />
                <p className="text-gray-300 pl-4">
                  {reviews[activeIndex].review}
                </p>
              </div>
            </motion.div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevReview}
                className="bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? "bg-purple-500" : "bg-slate-600"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextReview}
                className="bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
