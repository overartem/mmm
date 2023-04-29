import hand from "../../../assets/images/hand-logo.svg";
import Button from "../../buttons/Button/Button";

function NotFound() {
    return (
        <div className="content-wrapper">
            <img src={hand} className="hand-logo" alt="Supper Game" />
            <div className="content">
                <h1>404: Page Not Found</h1>
                <Button from="404" to="game" title="Start again" />
            </div>
        </div>
    );
}

export default NotFound;