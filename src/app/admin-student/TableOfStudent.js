import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "../admin-teacher/data"


export default function TableOfStudent() {
  return (

    <section className="mt-[3%]">
      <div class="mx-24 flex flex-col ">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">

            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-main border-b">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                    >
                      UserName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left">
                      FirstName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left">
                      LastName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"

                    >
                      Delete
                    </th>

                  </tr>
                </thead>
                <tbody>

                  {data && data.map((item) => {
                    console.log(data)
                    return (
                      <tr class="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b"  >

                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.username}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.firstname}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.lastname}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.email}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.dob}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">
                          <button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[50%] text-[#CD0404]">
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