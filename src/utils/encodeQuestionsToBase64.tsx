const encodeQuestionsToBase64 = (data: any) =>
  data.map((question: any) => ({
    category: btoa(question.category),
    type: btoa(question.type),
    difficulty: btoa(question.difficulty),
    question: btoa(question.question),
    correct_answer: btoa(question.correct_answer),
    incorrect_answers: question.incorrect_answers.map((incorrectAnswer: any) =>
      btoa(incorrectAnswer)
    ),
  }));

export default encodeQuestionsToBase64;
