"use client"
import { motion } from "framer-motion"
import { Search, PenTool, Code, TestTube, Truck, Headphones } from "lucide-react"

const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business needs and challenges.",
    details:
      "Our team of experts conducts thorough research and analysis to identify your unique requirements and pain points.",
    icon: Search,
  },
  {
    title: "Planning",
    description: "Our experts craft a tailored strategy and roadmap for your project.",
    details:
      "We create a comprehensive project plan, including timelines, milestones, and resource allocation to ensure smooth execution.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "We bring your vision to life with cutting-edge technologies and best practices.",
    details:
      "Our skilled developers use agile methodologies and the latest tech stack to build robust, scalable solutions.",
    icon: Code,
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance ensures a flawless end product.",
    details:
      "We perform extensive testing, including unit tests, integration tests, and user acceptance testing to guarantee high-quality deliverables.",
    icon: TestTube,
  },
  {
    title: "Deployment",
    description: "We seamlessly integrate your solution into your existing infrastructure.",
    details: "Our DevOps team ensures smooth deployment with minimal downtime and maximum security.",
    icon: Truck,
  },
  {
    title: "Support",
    description: "Our team provides ongoing maintenance and support to ensure optimal performance.",
    details:
      "We offer 24/7 support, regular updates, and performance monitoring to keep your solution running at peak efficiency.",
    icon: Headphones,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
}

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
}

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
      <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#003366]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Our Proven Process
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.title}
              className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 mb-6 text-[#003366] flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <step.icon size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">{step.title}</h3>
              <p className="text-gray-700 mb-6">{step.description}</p>
              <p className="text-gray-600 text-sm">{step.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}