import encodeQuestionsToBase64 from "../utils/encodeQuestionsToBase64";

const questions = {
  data: {
    results: [
      {
        category: "test",
        type: "test",
        difficulty: "test",
        question: "question 1",
        correct_answer: "correct answer q1",
        incorrect_answers: [
          "incorrect answer q1-1",
          "incorrect answer q1-2",
          "incorrect answer q1-3",
        ],
      },
      {
        category: "test",
        type: "test",
        difficulty: "test",
        question: "question 2",
        correct_answer: "correct answer q2",
        incorrect_answers: [
          "incorrect answer q2-1",
          "incorrect answer q2-2",
          "incorrect answer q2-3",
        ],
      },
      {
        category: "test",
        type: "test",
        difficulty: "test",
        question: "question 3",
        correct_answer: "correct answer q3",
        incorrect_answers: [
          "incorrect answer q3-1",
          "incorrect answer q3-2",
          "incorrect answer q3-3",
        ],
      },
      {
        category: "test",
        type: "test",
        difficulty: "test",
        question: "question 4",
        correct_answer: "correct answer q4",
        incorrect_answers: [
          "incorrect answer q4-1",
          "incorrect answer q4-2",
          "incorrect answer q4-3",
        ],
      },
      {
        category: "test",
        type: "test",
        difficulty: "test",
        question: "question 5",
        correct_answer: "correct answer q5",
        incorrect_answers: [
          "incorrect answer q5-1",
          "incorrect answer q5-2",
          "incorrect answer q5-3",
        ],
      },
    ],
  },
};

const questionsBase64 = {
  data: {
    results: encodeQuestionsToBase64(questions.data.results),
  },
};

export default questionsBase64;
