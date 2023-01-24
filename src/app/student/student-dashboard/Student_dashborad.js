"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';




export default function Student_dashborad() {
  const [getAllCourses, setgetAllCourses] = useState([])

  const URL_STUDENT_COURSE = "https://school-system-final-project.herokuapp.com/api/v1/course/students/get-all/"

  const router = useRouter()

  const SendPK = (item) => {
    localStorage.setItem("courseId", JSON.stringify(item.pk))
    router.push("/student/student-assignment")
  }


  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  useEffect(() => {
    axios
      .get(URL_STUDENT_COURSE, config)
      .then((res) => {
        setgetAllCourses(res.data)
        console.log(res.data)


      }
      )
      .catch((err) => {
      })
  }, [])
  return (

    <section className="flex flex-wrap justify-center gap-4 mt-[5%] ml-[15%]">
      {getAllCourses && getAllCourses.map((item) => {
        return (

          <div>
              <a  onClick={() => SendPK(item)} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/CourseName.png" alt="CourseName" />
                <div className="flex flex-col justify-between p-4 leading-normal hover:bg-lime-200">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.grade_level} || {item.time}</p>
                </div>
              </a>
            </div>
       
        )
      })}
    </section>

  )
}