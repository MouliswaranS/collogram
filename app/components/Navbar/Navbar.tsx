"use client";
import React, { useEffect, useState } from "react";
import Login from "../../login/Login";
function Navbar() {
  const [isBanner, SetBanner] = useState(true);
  const showMenu = () => {
    if (window.innerWidth < 750) {
      let dom = document.getElementById("menubar");
      if (dom && isBanner) {
        dom.style.animation = "slide-in 0.5s ease-out";
        dom.style.transition = "0.34s";
        dom.style.pointerEvents = "auto";
        dom.style.display = "flex";
        SetBanner(!isBanner);
        return;
      } else if (dom) {
        dom.style.pointerEvents = "none";
        dom.style.display = "none";
        SetBanner(!isBanner);
        return;
      }
    }
  };
  useEffect(() => {
    if (window.innerWidth < 750) {
      let dom = document.getElementById("menubar");
      if (dom && isBanner) {
        dom.style.pointerEvents = "none";
        dom.style.display = "none";
      }
    }
  }, []);
  return (
    <div className=" flex justify-between fixed w-full backgound-theme ">
      <div className="logo hidden sm:flex">Logo Park</div>
      <div className=" w-7/12">
        <input
          type="text"
          name="search"
          id="SearchBar"
          placeholder="SearchBar"
          className=" px-5 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:w-9/12  w-48 ml-16"
        />
      </div>
      <button
        onClick={() => showMenu()}
        className=" sm:hidden absolute w-10 h-10 menuImage m-2"
        id="menu-background"
      >
        
      </button>
      <div className="Menu sm:flex w-1/5 justify-between mr-5" id="menubar">
        <div className="banner flex w-full justify-between flex-col sm:flex-row items-center mt-10 sm:mt-0">
          <button className="themebtn">Dark</button>
          <button className="Notifications w-8 h-8">Notif</button>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
