import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About SaferTek
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg mb-6">
          SaferTek is a leading provider of innovative security solutions. Our mission is to create a safer world through cutting-edge technology and expert services.
        </p>
        <p className="text-lg mb-6">
          Founded in 2010, we have been at the forefront of security technology, constantly evolving to meet the challenges of an ever-changing threat landscape.
        </p>
        <p className="text-lg">
          Our team of dedicated professionals brings years of experience and a passion for security to every project we undertake.
        </p>
      </motion.div>
    </div>
  );
};

export default About;