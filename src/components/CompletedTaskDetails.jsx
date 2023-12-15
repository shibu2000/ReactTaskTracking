import React from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const CompletedTaskDetails = ({ task, taskUndo, completeTaskDelete }) => {
  return (
    <div className="inputGoup  md:pl-3 font-mono p-2 text-sm md:text-xl flex justify-between border-b">
      <label htmlFor={task.id} className="p-2 break-words overflow-auto">
        {task.data}
      </label>
      <div className="border-l flex flex-col items-center">
        <button
          className="inline-block p-2 rounded-full hover:bg-slate-800 active:bg-slate-950 mr-1"
          onClick={() => {
            taskUndo(task);
          }}
          title="Undo"
        >
          <BsArrowCounterclockwise />
        </button>
        <button
          className="inline-block p-2 rounded-full hover:bg-slate-800 active:bg-slate-950"
          onClick={() => {
            completeTaskDelete(task);
          }}
          title="Delete"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default CompletedTaskDetails;
