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
  handleValidate: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  label: string;
}

export type BtnStatus = {
  id: number;
  type: string;
};
