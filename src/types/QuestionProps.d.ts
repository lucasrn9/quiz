export default interface QuestionProps {
  question: string;
  incorrectAnswers: { answer: string; selected: boolean; id: string }[];
  correctAnswer: { answer: string; selected: boolean; id: string };
  showAnswers: boolean;
  correctCounter: boolean[];
  QuestionIndex: number;
}
