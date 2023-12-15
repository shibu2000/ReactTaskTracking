import React, { useContext, useState, useEffect } from "react";
import { ThemeContext, ThemeToggle } from "../App";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TaskDetails from "./TaskDetails";
import CompletedTaskDetails from "./CompletedTaskDetails";

const MainBody = () => {
  //================context============
  const theme = useContext(ThemeContext);
  const themeToggle = useContext(ThemeToggle);
  //===========context=====================

  //state variable for taking the input from input field
  const [taskData, setTaskData] = useState("");

  //state variable for pending tasks/newly created task
  const [taskArray, setTaskArray] = useState([]);

  //state variable for completed tasks
  const [completedTaskArray, setCompletedTaskArray] = useState([]);

  var date = new Date();

  // function savePendingTaskLocalStorage() {
  //   localStorage.setItem("pendingTask", JSON.stringify(taskArray));
  // }

  useEffect(() => {
    const pendingTask = localStorage.getItem("PENDING_TASK");
    pendingTask ? setTaskArray(JSON.parse(pendingTask)) : setTaskArray([]);

    const completedTask = localStorage.getItem("COMPLETED_TASK");

    completedTask
      ? setCompletedTaskArray(JSON.parse(completedTask))
      : setCompletedTaskArray([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("PENDING_TASK", JSON.stringify(taskArray));
  }, [taskArray]);

  useEffect(() => {
    localStorage.setItem("COMPLETED_TASK", JSON.stringify(completedTaskArray));
  }, [completedTaskArray]);

  //method for adding task into an array and display into pending task area
  const taskSubmit = (e) => {
    e.preventDefault();
    if (taskData.trim().length > 0) {
      setTaskArray([
        ...taskArray,
        {
          //generating unquie key for every task data to make them identical
          id: getUniqueKey(),
          data: taskData,
        },
      ]);
      setTaskData("");
    }
  };

  const taskCompleted = async (task) => {
    setCompletedTaskArray([...completedTaskArray, task]);
    setTaskArray(
      taskArray.filter((data) => {
        return data !== task;
      })
    );
  };

  //remove the desire task from task Array
  const filterCompleteTaskArrsy = (task) => {
    setCompletedTaskArray(
      completedTaskArray.filter((data) => {
        return data.id !== task.id;
      })
    );
  };

  const taskUndo = (task) => {
    filterCompleteTaskArrsy(task);
    setTaskArray([...taskArray, task]);
  };

  //Delete the taskes from complete task lists
  const completeTaskDelete = (task) => {
    filterCompleteTaskArrsy(task);
  };

  const pendingTaskDelete = (task) => [
    setTaskArray(
      taskArray.filter((data) => {
        return data.id != task.id;
      })
    ),
  ];

  function getUniqueKey() {
    return (
      String(date.getHours()) +
      String(date.getMinutes()) +
      String(date.getSeconds()) +
      String(date.getMilliseconds())
    );
  }

  return (
    <main>
      <div className="container p-2 mx-auto">
        <div>
          <form onSubmit={taskSubmit}>
            <div className="p-4 flex justify-center">
              <input
                required
                value={taskData}
                type="text"
                className={`focus:outline-none md:w-2/4 sm:w-3/4 p-3 border-b border-b-gray-500 ${
                  theme ? "bg-slate-900 text-white" : "bg-slate-50"
                }`}
                placeholder="Enter Your Task Here"
                onChange={(e) => setTaskData(e.target.value)}
              />
              <button
                className="text-4xl px-2 rounded-full hover:shadow-lg"
                type="submit"
              >
                <BsFillArrowRightCircleFill />
              </button>
              <button
                type="reset"
                className="bg-slate-600 rounded p-2 hover:bg-slate-700"
                onClick={() => {
                  localStorage.clear();
                  setTaskArray([]);
                  setCompletedTaskArray([]);
                }}
              >
                Clear Data
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="border-r p-3">
            <h1 className="md:text-2xl text-center border-b p-2">
              Pending Task
            </h1>
            {taskArray.map((task) => {
              return (
                <TaskDetails
                  key={task.id}
                  task={task}
                  taskCompleted={taskCompleted}
                  pendingTaskDelete={pendingTaskDelete}
                />
              );
            })}
          </div>
          <div className="border-l p-3">
            <h1 className="md:text-2xl text-center border-b p-2">
              Completed Task
            </h1>
            {completedTaskArray.map((task) => {
              return (
                <CompletedTaskDetails
                  key={task.id}
                  task={task}
                  taskUndo={taskUndo}
                  completeTaskDelete={completeTaskDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
