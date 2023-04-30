import { ActionGame, IStateGame } from "../../../../types/models";

export default function GameNavReducer(
  state: IStateGame,
  action: ActionGame
): IStateGame {
  switch (action.type) {
    case "setCurrentQuestionNumber": {
      const newQuestionNumber =
        typeof action.payload === "function"
          ? action.payload(state.currentQuestionNumber)
          : action.payload;
      return { ...state, currentQuestionNumber: newQuestionNumber };
    }
    case "setDisable": {
      return { ...state, disable: action.payload };
    }
    case "setIsNext": {
      return { ...state, isNext: action.payload };
    }
    case "setTimeoutId": {
      return { ...state, timeoutId: action.payload };
    }
    case "setBtnStatus": {
      return { ...state, btnStatus: action.payload };
    }
    default:
      throw new Error("Unexpected action");
  }
}
