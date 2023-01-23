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

    <section className="flex flex-wrap justify-center gap-4 mt-[7%]">
      {getAllCourses && getAllCourses.map((item) => {
        return (

          <div className="max-w-[350px]">
            <a href="/teacher-assignment" onClick={() => SendPK(item)} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-40 rounded-t-lg h-20 " src="https://img.freepik.com/premium-vector/heap-books-sketch-library-stack-education-symbol_80590-12797.jpg?w=2000" alt="CourseName" />
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