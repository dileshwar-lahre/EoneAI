import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-10"
      >
        {/* Animated EoneAI Logo Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <motion.h1
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          >
            EoneAI
          </motion.h1>
          <p className="text-gray-400 mt-1 text-sm">AI-powered Code Reviewer</p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-2xl shadow-lg p-6 border border-zinc-800"
        >
          <h2 className="text-3xl font-semibold mb-4 border-b border-zinc-700 pb-2">About EoneAI</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>EoneAI</strong> is an advanced AI code reviewer that helps developers enhance code quality by
            providing intelligent suggestions powered by Gemini API. Whether you're debugging, optimizing, or learning,
            EoneAI is your smart coding companion.
          </p>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-2xl shadow-lg p-6 border border-zinc-800"
        >
          <h2 className="text-2xl font-semibold mb-3">Developer</h2>
          <p className="text-gray-300 text-base">
            Created by <strong>Dileshwar Lahre</strong>, a passionate Full Stack Developer and Cybersecurity Enthusiast.  
            GitHub:{' '}
            <a
              href="https://github.com/dileshwar-lahre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              github.com/dileshwar-lahre
            </a>
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-2xl shadow-lg p-6 border border-zinc-800"
        >
          <h2 className="text-2xl font-semibold mb-3">Core Features</h2>
          <ul className="list-disc text-gray-300 list-inside space-y-1">
            <li>AI-powered code analysis and review</li>
            <li>Code generation assistance using Gemini API</li>
            <li>Web and terminal support</li>
            <li>Multilingual support planned</li>
            <li>VS Code extension coming soon</li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-2xl shadow-lg p-6 border border-zinc-800"
        >
          <h2 className="text-2xl font-semibold mb-3">Technology Stack</h2>
          <ul className="list-disc text-gray-300 list-inside space-y-1">
            <li>Frontend: React.js + Tailwind CSS</li>
            <li>Backend: Node.js + Express + MongoDB Atlas</li>
            <li>AI: Gemini API (Google)</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;