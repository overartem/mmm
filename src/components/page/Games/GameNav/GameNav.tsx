import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentStepAction } from "../../../../app/reducers";
import AnswerBtn from "../../../buttons/AnswerBtn/AnswerBtn";
import useUpdateEffect from "../../../../hooks/useUpdateEffect";
import { BtnStatus, IBase } from "../../../../types/models";

function GameNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, variantButtonLabels, startStep, currentStep } =
    useSelector((state: IBase) => state);
  const [currentQuestionNumber, setCurrentQuestionNumber] =
    useState<number>(startStep);
  const [disable, setDisable] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [btnStatus, setBtnStatus] = useState<BtnStatus>({
    id: 0,
    type: "",
  });
  const memoizedAnswers = useMemo(
    () => questions[currentQuestionNumber].answers,
    [questions, currentQuestionNumber]
  );
  const quantityQuestions = questions.length - 1;

  useEffect(() => {
    // game reset
    if (currentStep >= 0) {
      dispatch(currentStepAction(-1));
    }
  }, []);

  useUpdateEffect(() => {
    setBtnStatus({ id: 0, type: "" });
    setDisable(false);
  }, [currentQuestionNumber]);

  useUpdateEffect(() => {
    let timerId: NodeJS.Timeout;
    if (btnStatus.type === "correct") {
      dispatch(currentStepAction(currentQuestionNumber));
      if (quantityQuestions === currentQuestionNumber) {
        navigate("/final", { state: { from: "game" } });
      }
      timerId = setTimeout(() => {
        setCurrentQuestionNumber((prevQuestion) => prevQuestion + 1);
      }, 300);
    } else if (btnStatus.type === "error") {
      timerId = setTimeout(() => {
        navigate("/final", { state: { from: "game" } });
      }, 300);
    } else {
      console.error("btnStatus.type is not valid!");
      navigate("/final", { state: { from: "game" } });
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isNext]);

  const createTimeout = (id: number, time = 2000) => {
    const timerId = setTimeout(() => {
      if (memoizedAnswers[id].isTrue) {
        setBtnStatus({ id, type: "correct" });
        setDisable(true);
      } else {
        setBtnStatus({ id, type: "error" });
        setDisable(true);
      }
      setIsNext(!isNext);
    }, time);
    return Number(timerId);
  };

  useUpdateEffect((): void => {
    if (btnStatus.type === "selected") {
      setTimeoutId(createTimeout(btnStatus.id, 2000));
    }

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  }, [btnStatus]);

  const handleValidate = (id: number) => {
    setBtnStatus({ id, type: "selected" });
  };

  return (
    <div className="game-content">
      <h1>{questions[currentQuestionNumber].title}</h1>
      <div className="action-block">
        {memoizedAnswers.map((answer, index) => (
          <div
            key={answer.id}
            className={`answer-item ${
              btnStatus.id === index ? btnStatus.type : ""
            }${disable ? " disabled" : ""}`}
          >
            <AnswerBtn
              id={answer.id}
              title={answer.title}
              btnStatus={btnStatus.type}
              disable={disable}
              handleValidate={handleValidate}
              label={variantButtonLabels[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameNav;
