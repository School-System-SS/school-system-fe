"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';




export default function Student_dashborad() {
  const [getAllCourses, setgetAllCourses] = useState([])

  const URL_STUDENT_COURSE = "https://school-system-final-project.herokuapp.com/api/v1/course/students/get-all/"
  
  const router =useRouter()
  
  const SendPK = (item) => {
    localStorage.setItem("courseId", JSON.stringify(item.pk))
    console.log(item)
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

    <section className="mt-[7%]">
      {getAllCourses && getAllCourses.map((item) => {
        return (


          <div class="w-3 lg:w-1/2 p-3 mb-30 max-w-md">
            <a  onClick={() => SendPK(item)}>
              <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
                <img class="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src="data:image/png;base64,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" />
                <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="text-black font-bold text-xl mb-9 leading-tight">{item.grade_level}</div>
                  <p class="text-grey-darker text-base mb-[50%]">{item.name} || {item.time}</p>
                  <p class="text-grey-darker text-base mb-[50%]"></p>
                </div>
              </div>
            </a>
          </div>
        )
      })}
    </section>

  )
}