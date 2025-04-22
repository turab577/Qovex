'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Users, Heart, Briefcase } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function AboutUs() {
  const values = [
    {
      icon: <Rocket size={36} />,
      title: 'Innovation',
      desc: 'We explore, we build, and we grow with curiosity and creativity.',
    },
    {
      icon: <Heart size={36} />,
      title: 'Integrity',
      desc: 'Authenticity and transparency drive our every decision.',
    },
    {
      icon: <Users size={36} />,
      title: 'Team Spirit',
      desc: 'We move as one. Collaboration fuels our passion.',
    },
    {
      icon: <Briefcase size={36} />,
      title: 'Excellence',
      desc: 'We settle for nothing less than remarkable.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f8f3] via-white to-[#d9f4eb] px-6 py-20 text-gray-800 relative overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-[#74c8b0] opacity-20 blur-[120px] rounded-full z-0"></div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-20 relative z-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#74c8b0] to-[#389077] text-transparent bg-clip-text mb-6">
          Who We Are
        </h1>
        <p className="text-lg text-gray-600">
          At Qovex, we’re more than just a tech company. We’re a tight-knit team driven by vision,
          united by purpose, and inspired by possibilities.
        </p>
      </motion.div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24 relative z-10">
        {values.map((val, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-[#74c8b0] group"
          >
            <div className="text-[#389077] mb-4 group-hover:scale-110 transition-transform duration-200">
              {val.icon}
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{val.title}</h3>
            <p className="text-sm text-gray-600">{val.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-14 text-center relative z-10"
      >
        <div>
          <h2 className="text-3xl font-bold mb-3 text-[#389077]">Our Mission</h2>
          <p className="text-gray-700 text-md">
            To empower brands by building purposeful digital experiences that inspire connection and drive progress.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3 text-[#389077]">Our Vision</h2>
          <p className="text-gray-700 text-md">
            To be the global benchmark for innovation, trust, and lasting impact in the digital realm.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-24 text-center bg-gradient-to-r from-[#74c8b0] to-[#389077] text-white py-14 px-8 rounded-3xl max-w-5xl mx-auto shadow-xl relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build the Future Together</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join hands with a passionate team that believes in purpose, people, and pushing the limits of what&apos;s possible.
        </p>
        <Link href="/Contact">
          <button className="bg-black cursor-pointer text-white font-semibold px-6 py-3 rounded-full hover:bg-[#013619] transition-all">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
