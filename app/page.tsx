import React from "react";
import Login from "./login/Login";
function page() {
  return (
    <div>
      <nav className="flex w-full justify-around bg-red-100">
        <div className="logo font-roboto font-extrabold text-2xl">collogram</div>
        <ul className=" flex w-9/12 justify-evenly mt-2">
          <li className=" px-3 py-1 rounded-md my-2 bg-yellow-100 hover:bg-slate-300 transition-all">Home</li>
          <li className=" px-3 py-1 rounded-md my-2 bg-yellow-100 hover:bg-slate-300 transition-all">This will </li>
          <li className=" px-3 py-1 rounded-md my-2 bg-yellow-100 hover:bg-slate-300 transition-all">be Replaced</li>
          <li className=" px-3 py-1 rounded-md my-2 bg-yellow-100 hover:bg-slate-300 transition-all">In the Future</li>
        </ul>
        <Login />
      </nav>
    </div>
  );
}

export default page;
