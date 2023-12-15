import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const TaskDetails = ({ task, taskCompleted,pendingTaskDelete }) => {
  return (
    <div className="flex md:text-xl border-b">
      <div className="inputGoup pl-10 md:pl-3 font-mono p-2 overflow-hidden flex-1 flex">
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
          className="inline-block p-2 rounded-full hover:bg-slate-800 active:bg-slate-950"
          onClick={() => {
            pendingTaskDelete(task);
          }}
          title="Delete"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
