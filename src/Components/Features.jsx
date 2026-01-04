import { motion } from "framer-motion";
import { FaChartLine, FaRegAddressCard } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};


const FeatureCard = ({ icon, title, desc, i }) => (
  <motion.div
    variants={fadeUp}
    custom={i}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default function Features() {
  const features = [
    {
      title: "One-click Enrollment",
      desc: "Log in, pick a course, and enroll instantly. Your dashboard updates right away.",
      icon: (
        
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6H9a2 2 0 0 0-2 2v11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 19h11a2 2 0 0 0 2-2V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 10h7M9 14h7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Progress Tracking",
      desc: "Track enrolled courses, lessons, and progress in one clean dashboard.",
      icon: (
       <FaChartLine />
      ),
    },
    {
      title: "Add Courses System",
      desc: "Users can request roles (like instructor). Instructor can add coursers.",
      icon: (
       <FaRegAddressCard />
      ),
    },
    {
      title: "Secure Login",
      desc: "Modern authentication with protected routes and token-based access.",
      icon: (<GrSecure />
        
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto ">
        <h1 className="text-5xl text-center  font-bold mt-15 mb-5">Fe
           <span className="text-purple-500">atur</span>es</h1>
        <h3 className="text-center ">Learn faster with a platform built for real students</h3>
        <p className="text-center">Browse courses, log in, enroll, and track progress. Request roles when you’re ready to contribute.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
