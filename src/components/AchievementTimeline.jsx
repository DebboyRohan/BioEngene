"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    year: "2021",
    title: "Achievement 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2022",
    title: "Achievement 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2023",
    title: "Achievement 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2024",
    title: "Achievement 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function AchievementsTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative flex flex-col items-center justify-center py-20 bg-white text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Our Journey
      </h2>

      <div ref={ref} className="relative w-full max-w-3xl">
        {/* Timeline Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 w-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2"
        />

        {/* Timeline Items */}
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center w-full mb-16 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full transform -translate-x-1/2" />

            {/* Content */}
            <div
              className={`w-1/2 p-6 bg-white shadow-lg rounded-lg border-l-4 ${
                index % 2 === 0
                  ? "border-blue-500 ml-auto"
                  : "border-purple-500 mr-auto"
              }`}
            >
              <h3 className="text-xl font-bold">
                {item.year} - {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
