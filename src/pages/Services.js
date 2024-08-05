import React from 'react';
import { motion } from 'framer-motion';

const serviceList = [
  { title: 'Cybersecurity', description: 'Protect your digital assets with our advanced cybersecurity solutions.' },
  { title: 'Physical Security', description: 'Comprehensive physical security systems for your premises.' },
  { title: 'Risk Assessment', description: 'Identify and mitigate potential security risks in your organization.' },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;