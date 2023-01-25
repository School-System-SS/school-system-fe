"use client";
import React, { useEffect, useState } from "react";
import LogoutButton from "../teacher-gradebook/Dashboard/LogoutButton";

export function Side() {
  const [TeacherName, setTeacherName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("username");
    setTeacherName(userName);
  }, []);

  return (
    <section className="h-full fixed">
      <div
        id="view"
        className="text-[#FFFFFF] bg-darker  h-full"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Welcome{" "}
              {TeacherName.charAt(0).toUpperCase() +
                TeacherName.substr(1).toLowerCase()}
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src="/assets/Logo.svg"
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                  School Manegment System
                </h2>
              </div>
            </div>

            <div id="menu" className="flex flex-col space-y-2">
              <a
                href="/teacher-dashboard"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="">Dashboard</span>
              </a>

              <a
                href="/teacher-assignment"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">Assignment</span>
              </a>
              <a
                href="/teacher-gradebook"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                </svg>
                <span className="">Gradebook</span>
              </a>
              <div className="p-3">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
