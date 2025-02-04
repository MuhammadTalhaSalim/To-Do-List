
import React from "react";

import { BsToggleOn } from "react-icons/bs";
import { Link } from "react-router-dom";


function Navbar() {
   

  return (
    <>
      <nav className="sticky  text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm">
        <div className="container flex justify-between items-center p-2 ">
          <h1 className="cursor-pointer hover:font-bold transition-all duration-50">
            <Link to="/">My React App</Link>
          </h1>
          <ul className="ul flex justify-end list-none p-3">
            <li>
              <Link
                to="/todolist"
                className="m-10 cursor-pointer hover:font-bold transition-all duration-50"
              >
                {/* ToDoList  {theName} */}
                ToDoList
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
