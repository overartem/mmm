import { useEffect, useMemo, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentStepAction } from "../../../../app/reducers";
import GameNavReducer from "./GameNavReducer";
import AnswerBtn from "../../../buttons/AnswerBtn/AnswerBtn";
import useUpdateEffect from "../../../../hooks/useUpdateEffect";
import { IBase } from "../../../../types/models";

function GameNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, variantButtonLabels, startStep, currentStep } =
    useSelector((state: IBase) => state);
  const [gameState, dispatchGameState] = useReducer(GameNavReducer, {
    currentQuestionNumber: startStep,
    disable: false,
    isNext: false,
    timeoutId: null,
    btnStatus: {
      id: 0,
      type: "",
    },
  });

  const memoizedAnswers = useMemo(
    () => questions[gameState.currentQuestionNumber].answers,
    [questions, gameState.currentQuestionNumber]
  );
  const quantityQuestions = questions.length - 1;

  useEffect(() => {
    // game reset
    if (currentStep >= 0) {
      dispatch(currentStepAction(-1));
    }
  }, []);

  useUpdateEffect(() => {
    dispatchGameState({ type: "setBtnStatus", payload: { id: 0, type: "" } });
    dispatchGameState({ type: "setDisable", payload: false });
  }, [gameState.currentQuestionNumber]);

  useUpdateEffect(() => {
    let timerId: NodeJS.Timeout;
    if (gameState.btnStatus.type === "correct") {
      dispatch(currentStepAction(gameState.currentQuestionNumber));
      if (quantityQuestions === gameState.currentQuestionNumber) {
        navigate("/final", { state: { from: "game" } });
      } else {
        timerId = setTimeout(() => {
          dispatchGameState({
            type: "setCurrentQuestionNumber",
            payload: (prevQuestion: number) => prevQuestion + 1,
          });
        }, 300);
      }
    } else if (gameState.btnStatus.type === "error") {
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
  }, [gameState.isNext]);

  const createTimeout = (id: number, time = 2000) => {
    const timerId = setTimeout(() => {
      if (memoizedAnswers[id].isTrue) {
        dispatchGameState({
          type: "setBtnStatus",
          payload: { id, type: "correct" },
        });
      } else {
        dispatchGameState({
          type: "setBtnStatus",
          payload: { id, type: "error" },
        });
      }
      dispatchGameState({ type: "setDisable", payload: true });
      dispatchGameState({ type: "setIsNext", payload: !gameState.isNext });
    }, time);
    return Number(timerId);
  };

  useUpdateEffect((): void => {
    if (gameState.btnStatus.type === "selected") {
      dispatchGameState({
        type: "setTimeoutId",
        payload: createTimeout(gameState.btnStatus.id, 2000),
      });
    }

    if (gameState.timeoutId !== null) {
      clearTimeout(gameState.timeoutId);
    }
  }, [gameState.btnStatus]);

  const handleValidate = (id: number) => {
    dispatchGameState({
      type: "setBtnStatus",
      payload: { id, type: "selected" },
    });
  };

  return (
    <div className="game-content">
      <h1>{questions[gameState.currentQuestionNumber].title}</h1>
      <div className="action-block">
        {memoizedAnswers.map((answer, index) => (
          <div
            key={answer.id}
            className={`answer-item ${
              gameState.btnStatus.id === index ? gameState.btnStatus.type : ""
            }${gameState.disable ? " disabled" : ""}`}
          >
            <AnswerBtn
              id={answer.id}
              title={answer.title}
              btnStatus={gameState.btnStatus.type}
              disable={gameState.disable}
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
