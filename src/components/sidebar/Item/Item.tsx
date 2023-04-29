import { useSelector } from "react-redux";
import { IBase } from "../../../types/models";

interface IItemProps {
  value: number;
  current: number;
  id: number;
}
function Item({ value, current, id }: IItemProps) {
  const { currency } = useSelector((state: IBase) => state);
  return (
    <li
      className={`sidebar-item sidebar-item-${id}${
        id < current ? " done" : ""
      }${current === id ? " active" : ""}`}
    >
      <div className="sidebar-item-inner">
        <span>{currency + value}</span>
      </div>
    </li>
  );
}

export default Item;
