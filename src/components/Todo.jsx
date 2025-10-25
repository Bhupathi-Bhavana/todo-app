import { useRef, useState, useEffect } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/tasksSlice";
const Todo = () => {
  const item = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const handleAddClick = () => {
    if (item.current.value === "") {
      return setErrorMessage("please add your task");
    }
    dispatch(addTask({ id: Date.now(), item: item.current.value.trim() }));
    setErrorMessage("");

    item.current.value = "";
  };
  const task = useSelector((store) => store.task);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(task.items));
  }, [task.items]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-md ">
      {/*Title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/*Input Box */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          ref={item}
        />
        <button
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-mediu, cursor-pointer"
          onClick={handleAddClick}
        >
          ADD +
        </button>
      </div>
      <div className="">
        <p className="text-red-700 text-2xl py-2 text-center">{errorMessage}</p>
      </div>

      {task.items.map((task) => (
        <TodoItems key={task.id} id={task.id} item={task.item} />
      ))}
    </div>
  );
};

export default Todo;
