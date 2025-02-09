"use client"
import { motion } from "framer-motion"
import { Code, Database, Cloud, Zap, GitBranch } from "lucide-react"

const services = [
  {
    name: "Custom Development",
    description: "Tailored software solutions crafted to meet your unique business needs and challenges.",
    features: ["Agile development methodology", "Cutting-edge tech stack", "Scalable architecture design"],
    icon: Code,
  },
  {
    name: "Data Management",
    description: "Efficient data handling and storage solutions for your business.",
    features: ["Data warehousing", "ETL processes", "Data governance"],
    icon: Database,
  },
  {
    name: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your applications.",
    features: ["Multi-cloud strategy", "Cloud migration", "Serverless architecture"],
    icon: Cloud,
  },
  {
    name: "Performance Optimization",
    description: "Enhance your application's speed and efficiency.",
    features: ["Code optimization", "Database tuning", "Caching strategies"],
    icon: Zap,
  },
  {
    name: "DevOps & CI/CD",
    description: "Streamline your development and deployment processes.",
    features: ["Automated testing", "Continuous integration", "Continuous deployment"],
    icon: GitBranch,
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#003366]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Comprehensive Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 mb-6 text-[#003366] flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <service.icon size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">{service.name}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#003366]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}