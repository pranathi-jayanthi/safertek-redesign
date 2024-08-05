import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const trustingCompanies = [
    "Albertsons Safeway", "Galaxy Glass & Stone", "Grandview Cabinetry",
    "J.B. Gottstein & Co.", "Markraft Cabinets", "Nations Cabinetry",
    "Praters Foods", "RC Taylor Distributing", "Swartz Kitchens & Baths",
    "The Kitchen Man", "United Supermarkets", "Woodmont Cabinetry"
  ];

  useEffect(() => {
    if (!vantaEffect && typeof window.VANTA !== 'undefined') {
      setVantaEffect(window.VANTA.CELLS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x287392,
        color2: 0x3c6281
      }));
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative">
      <Parallax
        blur={0}
        bgImage="/assets/officeBuilding.jpg"
        strength={500}
        className="h-screen flex items-center justify-end"
      >
        <div className="text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg mr-16 max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            UFACTORY | UWARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg mb-8"
          >
            Unified Supply Chain/ERP Applications for Sales, Procurement, Inventory, Manufacturing, Finance, and Analytics.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </Parallax>

      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">About</h2>
          <p className="text-xl mb-8 max-w-5xl mx-auto text-gray-700">
            Founded in January 2006, Texas-based SAFERTEK Software is a developer and provider of supply chain/ERP applications for managing sales, procurement, inventory, manufacturing, and finance operations. Its applications are used by organizations across various industries from small-and-midsize enterprises to the Fortune 500 companies.
          </p>
          <img src="/assets/supplyChain.jpg" alt="Supply Chain" className="mt-12 mx-auto max-w-full rounded-lg shadow-lg" />
        </div>
      </section>

      <section ref={vantaRef} className="py-24 px-4 relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            <GlassmorphismCard
              icon="💻"
              title="What We Do"
              items={[
                "Innovate simple & easy apps",
                "Solve business challenges",
                "Apply business acumen",
                "Share domain knowledge",
                "Leverage best practices",
                "Engage key stakeholders",
                "Integrate with partners",
                "Embrace open technologies",
                "Deliver direct user support",
                "Empower your associates",
                "Share our journey"
              ]}
            />
            <GlassmorphismCard
              icon="🚀"
              title="Why UFACTORY|UWARE"
              items={[
                "All-in-One Software Suite",
                "On-Premise and On-Cloud",
                "Proven Industry Expertise",
                "Intuitive User Experience",
                "Agile Implementation",
                "Scalable and Reliable",
                "APIs for EDI Integration",
                "Apps for Mobile Devices",
                "Business Analytics",
                "Seamless Software Updates",
                "Direct Customer Support"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100 overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Who Trusts Us</h2>
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex space-x-8 px-4"
            animate={{ x: [0, -1920] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30,
              ease: "linear"
            }}
          >
            {[...trustingCompanies, ...trustingCompanies].map((company, index) => (
              <span key={index} className="text-lg font-semibold">{company}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">UFACTORY | UWARE Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ApplicationCard 
              title="Sales" 
              items={[
                "Customer Management",
                "Opportunity Management",
                "Pricing Management",
                "Project Management",
                "Configure, Price, Quote",
                "Order Management",
                "Returns Management",
                "Document Management"
              ]}
            />
            <ApplicationCard 
              title="Procurement" 
              items={[
                "Vendor Management",
                "Costs & Deals Management",
                "Historical Sales Tracking",
                "Demand Forecasting",
                "Purchase Optimization",
                "Proposals & Ordering",
                "Receiving & Slotting",
                "3-Way Invoicing Matching"
              ]}
            />
            <ApplicationCard 
              title="Manufacturing" 
              items={[
                "Warehouse Management",
                "Inventory Management",
                "BOM Management",
                "Production Scheduling",
                "Production Tracking",
                "Logistics Management",
                "Service Management",
                "Equipment Management"
              ]}
            />
            <ApplicationCard 
              title="Finance" 
              items={[
                "Receivables & Cash",
                "Payables & Payments",
                "WIP Cost/Rev Recognition",
                "Integrated Subledgers",
                "Assets & Depreciation",
                "Employees & Time Clock",
                "Payroll Integration",
                "Reporting & Analysis"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const GlassmorphismCard = ({ icon, title, items }) => (
  <motion.div 
    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg w-full md:w-96"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.3)"
    }}
  >
    <div className="text-4xl mb-4 text-white">{icon}</div>
    <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
    <ul className="text-white space-y-2 text-sm">
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          className="flex items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 5, color: "#a0e6ff" }}
        >
          <span className="mr-2">•</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ApplicationCard = ({ title, items }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ 
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f0f9ff"
    }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          className="flex items-start text-sm text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ x: 5, color: "#3b82f6" }}
        >
          <span className="mr-2">•</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Home;
