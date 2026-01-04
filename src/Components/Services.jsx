import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

// const SectionTitle = ({ eyebrow, title, desc }) => (
//   <div className="max-w-2xl">
//     {eyebrow && (
//       <p className="text-sm font-semibold text-blue-600">{eyebrow}</p>
//     )}
//     <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
//       {title}
//     </h2>
//     {desc && <p className="mt-2 text-gray-600">{desc}</p>}
//   </div>
// );

const ServiceCard = ({ title, points, i }) => (
  <motion.div
    variants={fadeUp}
    custom={i}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
  >
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <ul className="mt-4 space-y-2 text-gray-700">
      {points.map((p, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="mt-[6px] h-2 w-2 rounded-full bg-blue-600" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Services() {
  const services = [
    {
      title: "Student Learning Dashboard",
      points: [
        "See all enrolled courses in one place",
        "Resume lessons anytime",
        "Track completion and progress",
      ],
    },
    {
      title: "Course Discovery",
      points: [
        "Browse by category",
        "Read details before enrolling",
        "Save courses for later (optional)",
      ],
    },
    {
      title: "Admin & Role Management",
      points: [
        "Review role requests",
        "Approve or reject users",
        "Keep the platform secure",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20  ">
      <div className="mx-auto ">
        <h1 className="text-5xl font-bold text-center mt-15 mb-5">What <span className="text-purple-500">We</span> Offer</h1>
        <h3 className="text-center">Everything you need to learn and grow</h3>
        <p className="text-center">A clean student experience plus tools for admins to manage courses and roles.</p>
        

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
