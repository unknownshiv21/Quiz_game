import { motion } from "framer-motion"

interface QuestionProps {
  question: {
    question: string
    options: string[]
  }
  onAnswer: (answer: string) => void
  currentQuestion: number
  totalQuestions: number
}

export default function Question({ question, onAnswer, currentQuestion, totalQuestions }: QuestionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.question}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer(option)}
            className="w-full bg-white border-2 border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
          >
            {option}
          </motion.button>
        ))}
      </div>
      <div className="mt-8 text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </motion.div>
  )
}

