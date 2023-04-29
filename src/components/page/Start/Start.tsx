import hand from "../../../assets/images/hand-logo.svg";
import Button from "../../buttons/Button/Button";
import useBodyClass from "../../../hooks/useBodyClass";

function Start() {
  useBodyClass("start-page");
  return (
    <div className="content-wrapper">
      <img src={hand} className="hand-logo" alt="Super Game" />
      <div className="content">
        <h1>Who wants to be a millionaire?</h1>
        <Button from="start" to="game" title="Start" />
      </div>
    </div>
  );
}

export default Start;
