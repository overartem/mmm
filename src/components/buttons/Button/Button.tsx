import { useNavigate } from "react-router-dom";

function Button({
  title,
  from,
  to,
}: {
  title: string;
  from: string;
  to: string;
}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/${to}`, { state: { from } });
  };
  return (
    <button type="button" className="start-game" onClick={handleButtonClick}>
      {title}
    </button>
  );
}

export default Button;
