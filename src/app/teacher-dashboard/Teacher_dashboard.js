"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { Side } from "./Side";
import '../student/student-dashboard/page.css'
// import Create_assignment from "../teacher-assignment/CreateAssignment";
import LogoutButton from '../teacher-gradebook/Dashboard/LogoutButton'

export default function Teacher_dashboard() {
  // let TeacherName = JSON.parse(localStorage.getItem("username"))
  const [TeacherName, setTeacherName] = useState('');

  const router = useRouter();
  const [getAllCourses, setgetAllCourses] = useState([])

  const getAll = async () => {
    const URL = "https://school-system-final-project.herokuapp.com/api/v1/course/get-all/";
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };

    const res = await axios.get(URL, config);
    setgetAllCourses(res.data);
    const userName = localStorage.getItem('username')
    setTeacherName(userName)

  }
  useEffect(() => {
    getAll();
  }, [])

  const SendPK = (item) => {
    localStorage.setItem("courseId", JSON.stringify(item.pk))
  }

  return (
    <section className="flex">

      <section className="h-full w-[30%] flex flex-row">
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
                  Welcome | {TeacherName}
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
                      className="w-6 h-6 fill-current inline-block"
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
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="flex justify-center mr-[400px] mt-5 ">
      <div className="container  mt-2  ">
        {getAllCourses && getAllCourses.map((item) => {

          return (
          
            <a href="/teacher-assignment" onClick={() => SendPK(item)} >

            <div onClick={() => SendPK(item)} className=" services">
            <div className="face face1">
              <div className="content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="h-16 ml-[50%] -translate-x-1/2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <h3>{item.name}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content mt-[100px]">
                <p>
                  {item.grade_level} at {item.time}
                </p>
              </div>
            </div>
          </div>
          </a>
          )
        })}
         </div>
      </section>
     

    </section>


  )
}