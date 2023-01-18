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
              <thead class="bg-darker border-b">
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
                    <tr class="hover:bg-lighter bg-gray-100 border-b"  >
                        
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.username}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.firstname}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.lastname}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.email}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{item.teacher.dob}</td>
                        <td class="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">
                            <button >X</button>
                            
                            
                            
                            </td>

                        
                    </tr>
                )})}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
            
)
  
}