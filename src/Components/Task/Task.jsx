import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

const Task = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();

    const trimTask = inputValue.trim().toLowerCase();
    const isDuplicate = task.some((item) => item.toLowerCase() == trimTask);

    if (isDuplicate || !trimTask) {
      return;
    }

    setInputValue("");
    setTask([...task, inputValue]);
  };

  const addTask = () => {
    const trimTask = inputValue.trim().toLowerCase();
    const isDuplicate = task.some((item) => item.toLowerCase() == trimTask);

    if (isDuplicate || !trimTask) {
      return;
    }

    setInputValue("");
    setTask([...task, inputValue]);
  }

  const removeTask = (title) => {
    const newTask = task.filter((item) => item.toLowerCase() !== title);
    setTask(newTask);
  };

  return (
    <div className="bg-white p-2 rounded-2xl">
      <form onSubmit={handleForm} className="flex items-center justify-between">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Task..."
          className="border-gray-400 border outline-0 w-3/4 px-2"
        />
        <FaPlus
          className="cursor-pointer bg-[var(--blue-color)] text-white rounded-full p-2"
          size={30}
          onClick={addTask}
        />
      </form>

      <div className="mt-3">
        <ul className="px-2 h-[240px] overflow-y-scroll">
          {task.length == 0
            ? "No More Task"
            : task.map((tasks, i) => {
                return (
                  <li
                    onClick={() => removeTask(tasks)}
                    key={i}
                    className="flex items-center capitalize justify-between border-b border-b-gray-400 py-2"
                  >
                    <span>{tasks}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeTask(tasks);
                      }}
                      className="hover:bg-red-500 z-100 hover:text-white rounded-full cursor-pointer p-2"
                    >
                      <FaMinus size={20} />
                    </button>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Task;
