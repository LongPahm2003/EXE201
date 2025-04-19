import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dữ liệu quiz tĩnh với 10 câu hỏi về lập trình cho trẻ em
const quizData = {
  id: "1",
  title: "Coding Fun Quiz for Kids",
  questions: [
    {
      id: "q1",
      text: "What is the main tool used to create games in Scratch?",
      type: "multiple-choice",
      options: ["A. Paint", "B. Blocks", "C. Pencils", "D. Books"],
      correctAnswer: "B. Blocks",
    },
    {
      id: "q2",
      text: "Which color block in Scratch is used to move a character?",
      type: "multiple-choice",
      options: ["A. Blue", "B. Green", "C. Yellow", "D. Red"],
      correctAnswer: "A. Blue",
    },
    {
      id: "q3",
      text: "What does a 'loop' do in coding for kids?",
      type: "multiple-choice",
      options: [
        "A. Stops the game",
        "B. Repeats actions",
        "C. Deletes code",
        "D. Changes color",
      ],
      correctAnswer: "B. Repeats actions",
    },
    {
      id: "q4",
      text: "Which character can you control in Scratch by default?",
      type: "multiple-choice",
      options: ["A. Cat", "B. Dog", "C. Bird", "D. Fish"],
      correctAnswer: "A. Cat",
    },
    {
      id: "q5",
      text: "What is used to add sounds in Scratch projects?",
      type: "multiple-choice",
      options: [
        "A. Sound Block",
        "B. Color Block",
        "C. Move Block",
        "D. Draw Block",
      ],
      correctAnswer: "A. Sound Block",
    },
    {
      id: "q6",
      text: "Which of these is a coding platform for kids?",
      type: "multiple-choice",
      options: ["A. Minecraft", "B. Blockly", "C. Roblox", "D. Candy Crush"],
      correctAnswer: "B. Blockly",
    },
    {
      id: "q7",
      text: "What happens when you use an 'If' block in Scratch?",
      type: "multiple-choice",
      options: [
        "A. It always runs",
        "B. It runs only if a condition is true",
        "C. It stops the game",
        "D. It changes the background",
      ],
      correctAnswer: "B. It runs only if a condition is true",
    },
    {
      id: "q8",
      text: "Which block helps you make your character say something?",
      type: "multiple-choice",
      options: [
        "A. Say Block",
        "B. Move Block",
        "C. Jump Block",
        "D. Color Block",
      ],
      correctAnswer: "A. Say Block",
    },
    {
      id: "q9",
      text: "What is the purpose of a 'Sprite' in Scratch?",
      type: "multiple-choice",
      options: [
        "A. To draw lines",
        "B. To be a character or object",
        "C. To save the game",
        "D. To delete code",
      ],
      correctAnswer: "B. To be a character or object",
    },
    {
      id: "q10",
      text: "Which action can you do with a 'Forever' block in Scratch?",
      type: "multiple-choice",
      options: [
        "A. Stop once",
        "B. Repeat forever",
        "C. Change color once",
        "D. Move backward",
      ],
      correctAnswer: "B. Repeat forever",
    },
  ],
};

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 phút tính bằng giây

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    const submission = {
      studentId: "student_1", // Giả lập ID học sinh
      quizId: id,
      answers: Object.keys(answers).map((questionId) => {
        const question = quizData.questions.find((q) => q.id === questionId);
        return {
          questionId,
          questionText: question.text,
          selectedAnswer: answers[questionId],
          correctAnswer: question.correctAnswer,
        };
      }),
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    const existingSubmissions =
      JSON.parse(localStorage.getItem("quizSubmissions")) || [];
    const updatedSubmissions = [...existingSubmissions, submission];
    localStorage.setItem("quizSubmissions", JSON.stringify(updatedSubmissions));

    setSubmitted(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
          <p className="text-green-500 text-2xl mb-6">
            Quiz submitted successfully! Please wait for the results.
          </p>
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          {quizData.title}
        </h2>
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">Time Left: {formatTime(timeLeft)}</div>
          {timeLeft <= 60 && (
            <div className="text-red-500 animate-pulse">
              Hurry up! Time is almost up!
            </div>
          )}
        </div>
        <div className="space-y-6">
          {quizData.questions.map((question) => (
            <div
              key={question.id}
              className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg font-semibold text-gray-800 mb-3">
                {question.text}
              </p>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className="block p-2 bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                      className="mr-2 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                      disabled={submitted}
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 disabled:opacity-50"
              disabled={
                Object.keys(answers).length !== quizData.questions.length
              }
            >
              Submit Quiz
            </button>
          </div>
          <button
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
