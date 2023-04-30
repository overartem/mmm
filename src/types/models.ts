export interface IBase {
  questions: IQuestion[];
  currency: string;
  currentStep: number;
  startStep: number;
  variantButtonLabels: string[];
}

export interface IQuestion {
  id: number;
  title: string;
  value: number;
  answers: IAnswers[];
}

export interface IAnswers {
  id: number;
  title: string;
  isTrue: boolean;
}

export interface IAnswerBtnProps {
  id: number;
  title: string;
  btnStatus: string;
  disable: boolean;
  handleValidate: (id: number) => void;
  label: string;
}

export interface IStateGame {
  currentQuestionNumber: number;
  disable: boolean;
  isNext: boolean;
  timeoutId: number | null;
  btnStatus: {
    id: number;
    type: string;
  };
}

export type ActionGame =
  | {
      type: "setCurrentQuestionNumber";
      payload: number | ((prevQuestion: number) => number);
    }
  | { type: "setDisable"; payload: boolean }
  | { type: "setIsNext"; payload: boolean }
  | { type: "setTimeoutId"; payload: number | null }
  | { type: "setBtnStatus"; payload: { id: number; type: string } };
