"use client";

import React from "react";
import LogoutButton from "../teacher-gradebook/Dashboard/LogoutButton";

export default function SideBar(props) {
  let Admin = JSON.parse(localStorage.getItem("username"));

  return (
    <section className="flex h-full">
      <div
        id="view"
        className="text-[#FFFFFF] bg-main  h-full"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="h-screen px-3 overflow-x-hidden transition-transform duration-300 ease-in-out shadow-xl md:block w-30 md:w-60 lg:w-60"
          x-show="sidenav"
        >
          <div className="mt-10 space-y-6 md:space-y-10">
            <h1 className="hidden text-sm font-bold text-center md:block md:text-xl">
              Welcome{" "}
              {Admin.charAt(0).toUpperCase() +
                Admin.substr(1).toLowerCase()}
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src="/assets/Logo.svg"
                alt="Avatar user"
                className="w-10 mx-auto rounded-full md:w-16"
              />
              <div>
                <h2 className="text-xs font-medium text-center text-teal-500 md:text-sm">
                  School Manegment System
                </h2>
              </div>
            </div>


            

            <div id="menu" className="flex flex-col space-y-2">
              <a
                href="/student/student-dashboard"
                className="flex px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-lighter hover:scale-105 color-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <span className="">Dashboard</span>
              </a>


              { props.inDetails &&
              <a
                href="/student/student-assignment"
                className="flex px-2 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-lighter hover:scale-105 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                  </svg>

                <span className="">Assignment</span>
              </a>}
              
          
                
              <div className="m-5 ">
                
                <LogoutButton />
                </div>
            </div>
          </div>
        </div>
        </div>
      
    </section>
  );
}
