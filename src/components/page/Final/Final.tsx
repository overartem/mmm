import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useBodyClass from "../../../hooks/useBodyClass";
import hand from "../../../assets/images/hand-logo.svg";
import Button from "../../buttons/Button/Button";
import { IBase } from "../../../types/models";

function Final() {
  useBodyClass("final-page");
  const [winValue, setVinValue] = useState(0);
  const [rotate, setRotate] = useState(false);
  const { questions, currentStep } = useSelector((state: IBase) => state);

  useEffect(() => {
    if (currentStep >= 0) {
      setVinValue(questions[currentStep].value);
    } else {
      const timerId = setTimeout(()=> {
        setRotate(true)
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    }
    return undefined;
  }, [currentStep, questions]);
  return (
    <div className="content-wrapper">
      <img src={hand} className={`hand-logo${rotate ? " loser" : ""}`} alt="Supper Game" />
      <div className="content">
        <h2 className="total-score">Total score:</h2>
        <h1>{`${winValue} earned`}</h1>
        <Button from="final" to="game" title="Try again" />
      </div>
    </div>
  );
}

export default Final;
