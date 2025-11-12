import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { BookOpen, GraduationCap, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden mt-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Empower Your Future with{" "}
          <span className="text-yellow-300">Smart Learning</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8"
        >
          Join thousands of learners mastering new skills, earning
          certifications, and transforming their careers.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          
        </motion.div>

        {/* Marquee Section */}
        <div className="mt-16">
          <Marquee gradient={false} speed={80}>
            <div className="flex items-center gap-12 text-lg font-medium">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Web Development
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Data Science
              </span>
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5" /> AI & Machine Learning
              </span>

              <span className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Digital Marketing
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Music
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Art
              </span>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
