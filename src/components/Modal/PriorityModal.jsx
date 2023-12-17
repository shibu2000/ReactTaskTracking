import React, { useState } from "react";
import { IoIosClose, IoMdSend } from "react-icons/io";

const PriorityModal = ({
  setPriorityModal,
  changePriority,
  taskArrayLength,
}) => {
  const [priorityIndex, setPriorityIndex] = useState("");
  const [isPriorityIndexInRange, setIsPriorityIndexInRange] = useState(true);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen `}
      style={{ backgroundColor: "rgba(60, 72, 88, 0.1)" }}
    >
      <div
        className="border absolute top-7 bg-slate-600 p-4 text-md rounded-md"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            changePriority(priorityIndex - 1);
          }}
        >
          <label htmlFor="priorityBox" className="block mb-2">
            Set Priority: (1 - {taskArrayLength})
          </label>
          <div className="flex">
            <input
              type="number"
              id="priorityBox"
              name="priorityBox"
              className={`bg-slate-200 rounded-s-xl outline-none -outline-offset-1 pl-3 font- text-black`}
              value={priorityIndex}
              onChange={(e) => {
                e.target.value < 1 || e.target.value > taskArrayLength
                  ? setIsPriorityIndexInRange(false)
                  : setIsPriorityIndexInRange(true);
                setPriorityIndex(e.target.value);
              }}
            />
            <button
              type="submit"
              className={`text-2xl text-blue-800 rounded-e-xl hover:bg-slate-300 ${
                isPriorityIndexInRange ? "bg-slate-200" : "bg-slate-400"
              }`}
              disabled={isPriorityIndexInRange ? false : true}
            >
              <IoMdSend className="h-full" />
            </button>
          </div>
          {!isPriorityIndexInRange ? (
            <label className="pl-2 font-mono text-xs text-red-300">
              Enter Value in Range
            </label>
          ) : (
            ""
          )}
        </form>
        <button
          className="absolute top-0 right-0 cursor-pointer text-black hover:bg-slate-400 rounded-full"
          onClick={() => setPriorityModal(false)}
        >
          <IoIosClose />
        </button>
      </div>
    </div>
  );
};

export default PriorityModal;
