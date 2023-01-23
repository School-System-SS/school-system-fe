"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { Side } from "./Side";
import Create_assignment from "../teacher-assignment/CreateAssignment";

export default function Teacher_dashboard() {
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

  }
  useEffect(() => {
    getAll();
  }, [])

  const SendPK = (item) =>{
    localStorage.setItem("courseId", JSON.stringify(item.pk))
  }


  return (
    <section className="flex">

      <section className="h-full w-[30%] flex flex-row">
        <Side />
      </section>

      <section className="flex items-stretch gap-4 mt-5l;">

        {getAllCourses && getAllCourses.map((item) => {
          console.log(getAllCourses)
          return (
            <div>
              <a href="/teacher-assignment" onClick={()=>SendPK(item)} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/CourseName.png" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal hover:bg-lime-200">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.grade_level} || {item.time}</p>
                </div>
              </a>
            </div>
          )
        })}
      </section>

    </section>


  )
}