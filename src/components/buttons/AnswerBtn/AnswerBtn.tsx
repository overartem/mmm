import { IAnswerBtnProps } from "../../../types/models";

function AnswerBtn({
  id,
  title,
  btnStatus,
  disable,
  handleValidate,
  label,
}: IAnswerBtnProps) {
  return (
    <button
      disabled={disable}
      type="button"
      className={`answer-button ${btnStatus}`}
      onClick={() => handleValidate(id)}
    >
      <span>{label}</span>
      {title}
    </button>
  );
}

export default AnswerBtn;
