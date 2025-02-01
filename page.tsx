"use client"

import { useState, useEffect } from "react"
import Start from "./components/Start"
import Question from "./components/Question"
import Result from "./components/Result"

interface QuizData {
  questions: {
    question: string
    options: string[]
    correctAnswer: string
  }[]
}

// Fallback quiz data
const fallbackQuizData: QuizData = {
  questions: [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
  ],
}

export default function Home() {
  const [quizData, setQuizData] = useState<QuizData | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch("https://api.jsonserve.com/Uw5CrX", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (!data || !data.questions || !Array.isArray(data.questions)) {
          throw new Error("Invalid data structure received from API")
        }
        setQuizData(data)
      } catch (error) {
        console.error("Error fetching quiz data:", error)
        setError(
          `Failed to fetch quiz data. Using fallback data. Error: ${error instanceof Error ? error.message : String(error)}`,
        )
        setQuizData(fallbackQuizData)
      }
    }

    fetchQuizData()
  }, [])

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  const handleAnswer = (selectedAnswer: string) => {
    if (quizData && selectedAnswer === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (quizData && currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  if (!quizData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading quiz data...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {!quizStarted && <Start onStart={startQuiz} />}
        {quizStarted && !showResult && (
          <Question
            question={quizData.questions[currentQuestion]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={quizData.questions.length}
          />
        )}
        {showResult && <Result score={score} totalQuestions={quizData.questions.length} onRestart={startQuiz} />}
      </div>
    </main>
  )
}

