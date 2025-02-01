import { motion } from "framer-motion"

interface ResultProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function Result({ score, totalQuestions, onRestart }: ResultProps) {
  const percentage = (score / totalQuestions) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Quiz Completed!</h2>
      <p className="text-xl mb-4 text-gray-600">
        Your score: {score} out of {totalQuestions}
      </p>
      <motion.div
        className="w-full h-4 bg-gray-200 rounded-full mb-6"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="h-full bg-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>
      <p className="text-2xl font-bold mb-8 text-gray-800">{percentage}%</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Restart Quiz
      </motion.button>
    </motion.div>
  )
}

