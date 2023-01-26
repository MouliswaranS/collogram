import React from "react";
import Login from "../../login/Login";
function Navbar() {
  return (
    <div className=" flex justify-between fixed w-full ">
      <div className="logo">Logo Park</div>
      <div className=" w-7/12">
        <input
          type="text"
          name="search"
          id="SearchBar"
          placeholder="SearchBar"
          className=" px-5 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-9/12"
        />
      </div>
      <div className="banner flex w-1/5 justify-between">
        <button className="themebtn">Dark</button>
        <button className="Notifications w-8 h-8">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            ></path>
          </svg>
        </button>
        <Login />
      </div>
    </div>
  );
}

export default Navbar;
