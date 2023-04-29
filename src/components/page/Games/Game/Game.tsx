import SidebarWrapper from "../../../sidebar/SidebarWrapper/SidebarWrapper";
import useBodyClass from "../../../../hooks/useBodyClass";
import GameNav from "../GameNav/GameNav";

function Game() {
  useBodyClass("main-page");
  return (
    <>
      <input type="checkbox" id="check-mobile-nav" />
      <label htmlFor="check-mobile-nav" className="mobile-label-nav">
        <i className="btn" />
        <i className="cancel" />
      </label>
      <GameNav />
      <SidebarWrapper />
    </>
  );
}

export default Game;
