import { useSelector } from "react-redux";
import Item from "../Item/Item";
import { IBase } from "../../../types/models";

function SidebarWrapper() {
  const { questions, currentStep } = useSelector((state: IBase) => state);
  const priceData = questions.slice().sort((a, b) => b.id - a.id);
  return (
    <div className="sidebar">
      <ul>
        {priceData?.map((obj) => (
          <Item
            key={obj.id}
            value={obj.value}
            id={obj.id}
            current={currentStep}
          />
        ))}
      </ul>
    </div>
  );
}
export default SidebarWrapper;
