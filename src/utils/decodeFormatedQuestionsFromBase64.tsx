const decodeFormatedQuestionsFromBase64 = (data: any) =>
  data.map((question: any) => ({
    category: atob(question.category),
    correct_answer: {
      answer: atob(question.correct_answer.answer),
      selected: question.correct_answer.selected,
      id: question.correct_answer.id,
    },
    difficulty: atob(question.difficulty),
    incorrect_answers: question.incorrect_answers.map(
      (incorrectAnswer: any) => ({
        answer: atob(incorrectAnswer.answer),
        selected: incorrectAnswer.selected,
        id: incorrectAnswer.id,
      })
    ),
    question: atob(question.question),
    type: atob(question.type),
  }));

export default decodeFormatedQuestionsFromBase64;
