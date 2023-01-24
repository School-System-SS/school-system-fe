"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";



export default function TableOfStudent() {
  const [allStudent, setAllStudents] = useState("")

  const STUDENT_URL =
    "https://school-system-final-project.herokuapp.com/api/v1/student/get-all/";
  
  const DELETE_STUDENT ="https://school-system-final-project.herokuapp.com/api/v1/student/delete/"

  let config = {
    headers: {
      Authorization: `Bearer ${ JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  useEffect(() => {
    axios
      .get(STUDENT_URL, config)
      .then((res) => {
        setAllStudents(res.data)
      })
      .catch((err) => {});
  })

  const handelDeleteStudent =(item)=>{
    axios
    .delete(DELETE_STUDENT+item.pk,config)
    .then((res)=>{
      swal({
        title: "Good job!",
        text: "Deleted Successfully",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
    })
    
  }

  return (

    <section className="pt-[100px] ml-[300px]">
      <div class="mx-24 flex flex-col ">
            <h1 className="text-center text-2xl font-bold pb-3">List of Students</h1>
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-main border-b">
                  <tr className="">
                    
                    <th
                      scope="col"
                      class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-3 text-center">
                      FirstName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-3 text-center">
                      LastName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-3 text-center"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-3 text-center"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-3 text-center"

                    >
                      Delete
                    </th>

                  </tr>
                </thead>
                <tbody>

                {allStudent && allStudent.map((item) => {
                    
                    return (
                      <tr class="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b"  >

                        <td class="litext-sm text-gray-900 font-medium text-center px-6 py-2 whitespace-nowrap">{item.first_name}</td>
                        <td class="litext-sm text-gray-900 font-medium text-center px-6 py-2 whitespace-nowrap">{item.last_name}</td>
                        <td class="litext-sm text-gray-900 font-medium text-center px-6 py-2 whitespace-nowrap">{item.email}</td>
                        <td class="litext-sm text-gray-900 font-medium text-center px-6 py-2 whitespace-nowrap">{item.birthday}</td>
                        <td class="litext-sm text-gray-900 font-medium text-center px-6 py-2 whitespace-nowrap">
                          <button  onClick={()=>handelDeleteStudent(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#CD0404]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                          </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

  )

}