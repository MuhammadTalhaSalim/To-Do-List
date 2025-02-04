import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

function ToDoList() {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);

  useEffect(() => {
    let stored = localStorage.getItem("tasks");
    if (stored) {
      setTask(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handelCheckBox = (e) => {
    const id = e.target.name;

    const index = task.findIndex((item) => {
      return item.id === id;
    });
    let newTasks = [...task];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTask(newTasks);
    saveToLocalStorage();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(task));
  };

  const handleDel = (e) => {
    confirm("are you sure you want to delete this");
    let id = e.target.name;
    let index = task.findIndex((item) => item.id === id);
    let newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
    saveToLocalStorage();
  };
  const handleEdit = (e, value, id) => {
    setValue(value);

    // let that = task.filter((item) => {
    //   return item.id === id;
    // });

    let newTasks = task.filter((item) => {
      return item.id !== id;
    });
    setTask(newTasks);
    saveToLocalStorage();
  };
  const addTolist = () => {
    if (value === "" ) {
      alert("Please enter a valid task");
      return; // Prevent the function from running if the value is invalid
    }
    setTask([...task, { id: uuidv4(), value, isCompleted: false }]);
    setValue("");
    console.log(task);
    saveToLocalStorage();
  };
  return (
    <>
      <div className="flex justify-center text-3xl non-italic font-mono my-[17px]">
        My To Do App
      </div>
      <div className="flex justify-center gap-6">
        <div class="mb-5 flex flex-col">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Your Tasks Here
          </label>

          <input
            type="text"
            name="toDo"
            onChange={handleChange}
            placeholder="enter a task"
            className=" bg-gray-50 border mx-auto border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
          />
          <button
            onClick={addTolist}
            type="button"
            className=" self-center w-[100px] m-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <div className="flex items-center gap-2 justify-center">Add <IoMdAddCircleOutline /></div>
          </button>
        </div>
      </div>
      {task?.length == 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="flex font-extrabold size-11">
            No Tasks to Do!!
          </h1>
        </div>
      ) : (
        <div className="container bg-slate-300 mx-auto my-5 min-h-[80vh] w-[70vw] rounded-xl w-50">
          {task?.map((item) => (
            <div
              id={item.id}
              key={item.id}
              className="flex justify-between p-3 items-center "
            >
              <input type="checkbox" name={item.id} onChange={handelCheckBox} />
              <p className={item.isCompleted ? "line-through font-semibold" : "text-black font-semibold "}>
                {item.value}
              </p>
              <div className="buttons">
                <button
                  name={item.id}
                  onClick={(e) => handleEdit(e, item.value, item.id)}
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                 
                 <div className="flex gap-2 items-center"><FaEdit /> Edit</div>
                </button>
                <button
                  name={item.id}
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={handleDel}
                >
                  <div className="flex gap-2 items-center"> <MdDelete /> Delete</div>
                 
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ToDoList;
