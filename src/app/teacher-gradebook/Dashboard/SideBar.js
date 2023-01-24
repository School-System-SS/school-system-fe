'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LogoutButton from "./LogoutButton";

export default function SideBar(props) {
  let TeacherName = JSON.parse(localStorage.getItem("username"))

  const router = useRouter();

  const URL = "https://school-system-final-project.herokuapp.com/api/v1/assignment/get-all/";

  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  const courseId = JSON.parse(localStorage.getItem("courseId"))
  const [getAllAssignment, setgetAllAssignment] = useState([]);

  const getAll = async () => {

    const res = await axios.get(URL, config);
    setgetAllAssignment(res.data);

  }
  useEffect(() => {
    getAll();
  }, [])
  const filteredCourse = getAllAssignment.filter(item => courseId == item.course)
  
  const CurrAssignment = (item) => {
    localStorage.setItem("Assignment ID", JSON.stringify(item.pk));
    window.location.href=`/teacher-gradebook/assignment`;
       
  }

  return (
    <>
      <section className='h-full fixed'>
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
                Welcome  {TeacherName.charAt(0).toUpperCase() +
                  TeacherName.substr(1).toLowerCase()}
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src="/assets/Logo.svg"
                  alt="Avatar user"
                  className="w-10 md:w-16 rounded-full mx-auto"
                />
                <div>
                  <h2
                    className="font-medium text-xs md:text-sm text-center text-teal-500"
                  >
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
                    className="w-6 h-6 fill-current inline-block mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <span className="">Dashboard</span>
                </a>

                <a
                  href="/teacher-assignment"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block mr-1"
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

                {filteredCourse.map(item => {
                  return (
                    <section>
                      <a className="text-white flex items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-blue-600  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mr-1 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>
                        <span className="hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out" onClick={() => {
                          CurrAssignment(item)                          
                          }}> {item.title}</span>
                      </a>
             
                    </section>
                  )
                })}
                <div className='p-3'><LogoutButton /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>

  )
}






