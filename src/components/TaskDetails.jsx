import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import PriorityModal from "./Modal/PriorityModal";

const TaskDetails = ({
  task,
  taskCompleted,
  pendingTaskDelete,
  setPriorityModal,
  setPriorityTask,
}) => {
  return (
    <div className="flex text-sm md:text-xl border-b font-mono">
      <div className="inputGoup md:pl-3 font-mono p-2 overflow-hidden flex-1 flex">
        <div className="">
          <input
            type="checkbox"
            id={task.id}
            onChange={(e) => {
              if (e.target.checked)
                setTimeout(() => {
                  taskCompleted(task);
                }, 200);
            }}
          />
        </div>
        <label htmlFor={task.id} className="ps-2 overflow-auto break-words">
          {task.data}
        </label>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="inline-block p-1 rounded-full hover:bg-slate-800 active:bg-slate-950"
          onClick={() => {
            pendingTaskDelete(task);
          }}
          title="Delete"
        >
          <MdDeleteOutline />
        </button>
        <button
          className="p-1 rounded-full hover:bg-slate-800 active:bg-slate-950"
          onClick={() => {
            setPriorityTask(task);
            setPriorityModal(true);
          }}
        >
          <CiMenuKebab />
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
