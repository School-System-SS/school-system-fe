"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import TeacherDashboardHeader from "../teacher-gradebook/Dashboard/TeacherDashboardHeader";
import LogoutButton from "../teacher-gradebook/Dashboard/LogoutButton";


export default function Teacher_dashboard() {
  const router = useRouter();

  return (
    <>
      {/* <TeacherDashboardHeader />

      <section className="grid grid-cols-4 gap-4 content-around ml-[40%] w-full">
        <div class=" p-3 mt-5 " >
          <div class="flex flex-col lg:flex-row rounded overflow-hidden lg:h-32 border shadow shadow-lg">
            <img src="/assets/CourseName.png" />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <a href="/teacher-assignment">
              course name
              </a>
              <p class="text-grey-darker text-base">grade  ||  time</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="flex">

        <section className="h-full w-[30%] flex flex-row">
          <div
            id="view"
            className="text-[#FFFFFF] bg-darker rounded-3xl"
            x-data="{ sidenav: true }"
          >

            <div
              id="sidebar"
              className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
              x-show="sidenav"
            >
              <div className="space-y-6 md:space-y-10 mt-10">
                <h1 className="font-bold text-4xl text-center md:hidden">
                  D<span className="text-teal-600">.</span>
                </h1>
                <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                  Teacher Name<span className="text-teal-600">.</span>
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
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
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
                      <path
                        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                      ></path>
                      <path
                        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                      ></path>
                    </svg>
                    <span className="">Gradebook</span>
                  </a>
                  <LogoutButton />
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="flex items-stretch gap-4 mt-5">
          <div>

            <a href="/teacher-assignment" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/CourseName.png" alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal hover:bg-lime-200">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Name</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade || Time</p>
              </div>
            </a>
          </div>

          <div>

            <a href="/teacher-assignment" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/CourseName.png" alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal hover:bg-lime-200">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Name</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade || Time</p>
              </div>
            </a>
          </div>

          <div>

            <a href="/teacher-assignment" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/CourseName.png" alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal hover:bg-lime-200">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Name</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade || Time</p>
              </div>
            </a>
          </div>





        </section>

      </section>







    </>
  )
}