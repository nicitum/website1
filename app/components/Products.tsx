"use client"
import { motion } from "framer-motion"
import { Cloud, BarChart2, Layers } from "lucide-react"

const products = [
  {
    name: "Nicitum Suite",
    description: "A comprehensive software suite for full-stack development, web, and mobile development.",
    features: ["Integrated Modules", "Real-time Analytics", "Customizable Workflows"],
    icon: Layers,
  },
  {
    name: "Nicitum Insight",
    description:
      "A business intelligence tool that helps analyze data, derive insights, and make data-driven decisions.",
    features: ["Advanced Analytics", "Predictive Modeling", "Interactive Dashboards"],
    icon: BarChart2,
  },
  {
    name: "Nicitum Cloud",
    description: "Scalable cloud solutions for seamless deployment, infrastructure, and storage.",
    features: ["Scalable Infrastructure", "Cloud Storage", "Seamless Deployment"],
    icon: Cloud,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
}

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#003366]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Innovative Products
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-20 h-20 mb-6 mx-auto bg-[#003366] text-white rounded-full flex items-center justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <product.icon size={40} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366] text-center">{product.name}</h3>
              <p className="text-gray-700 mb-6 text-center">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature) => (
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