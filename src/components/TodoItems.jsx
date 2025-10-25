import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { removeTask } from "../utils/tasksSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoItems = ({ id, item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTask({ id, item }));
  };
  const [isComplete, setComplete] = useState(false);
  const handleTaskCompleted = () => {
    setComplete(true);
  };
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img
          src={isComplete ? tick : not_tick}
          alt="checkIcon"
          className="w-7"
          onClick={handleTaskCompleted}
        />

        <p
          className={`text-slate-800 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {item}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="deleteItem"
        className="w-3.5"
        onClick={handleDelete}
      />
    </div>
  );
};

export default TodoItems;
