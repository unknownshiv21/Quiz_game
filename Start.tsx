import { motion } from "framer-motion"

interface StartProps {
  onStart: () => void
}

export default function Start({ onStart }: StartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Quiz!</h1>
      <p className="text-lg mb-8 text-gray-600">Test your knowledge and have fun!</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Start Quiz
      </motion.button>
    </motion.div>
  )
}

