export type HandleAnswerClick = (answerVal: string) => void;

export type AnswerCheckboxProps = {
  answerValue: string;
  handleOnClick: HandleAnswerClick;
  color: string;
};
