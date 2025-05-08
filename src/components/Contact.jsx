import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    {
      icon: <FaWhatsapp className="text-green-400 text-3xl" />,
      text: '+91 9131460470',
      link: 'https://wa.me/919131460470',
    },
    {
      icon: <FaGithub className="text-gray-300 text-3xl" />,
      text: 'dileshwar-lahre',
      link: 'https://github.com/dileshwar-lahre',
    },
    {
      icon: <FaLinkedin className="text-blue-500 text-3xl" />,
      text: 'dileshwar-lahre',
      link: 'https://linkedin.com/in/dileshwar-lahre',
    },
    {
      icon: <FaEnvelope className="text-red-400 text-3xl" />,
      text: 'dileshwarlahre806@gmail.com',
      link: 'mailto:dileshwarlahre806@gmail.com',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 sm:px-10">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          Let's Connect
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          I’m open for collaboration — reach me through any of the platforms below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-black border border-zinc-800 hover:border-purple-500 transition-all duration-300 rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-purple-500/30 hover:scale-[1.02]"
          >
            {contact.icon}
            <span className="text-lg text-gray-300 hover:underline">
              {contact.text}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;