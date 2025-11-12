import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaClock,
  FaGraduationCap,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie className="text-4xl text-indigo-600" />,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience who are passionate about helping you succeed.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      title: "Hands-On Learning",
      description:
        "Our courses focus on practical projects and interactive lessons so you can apply what you learn immediately.",
    },
    {
      icon: <FaClock className="text-4xl text-indigo-600" />,
      title: "Flexible Learning Options",
      description:
        "Study anytime, anywhere, and at your own pace — perfect for students, professionals, and lifelong learners.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-indigo-600" />,
      title: "Career-Focused Curriculum",
      description:
        "Every course is designed to help you build in-demand skills and prepare for real career opportunities.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-indigo-600" />,
      title: "Affordable & Accessible",
      description:
        "We believe quality education should be available to everyone. Get premium learning at a fraction of the cost.",
    },
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: "Community & Support",
      description:
        "Join a vibrant community of learners and mentors ready to help you grow, collaborate, and stay motivated.",
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-indigo-600">Us</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover what makes our learning platform unique and why thousands of
          learners trust us to reach their goals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-md rounded-2xl p-6 bg-white"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
