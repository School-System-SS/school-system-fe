"use client";
import React from "react";





export default function CourseStudentList() {
    return (
        
        <section className="TeacherAssignment-2">
        <div class="mx-24 flex flex-col mt-[5%] ">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">

              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-darker border-b">
                    <tr>
                      <th
                        scope="col"
                        class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-center"
                      >
                        Username
                      </th>
                      
                      <th
                        scope="col"
                        class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-center"
                        
                      >
                        Select
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                  {/* {
                tableData.map((data, index)=>{
                    return(
                        <tr class="hover:bg-lighter bg-gray-100 border-b" key={index} >
                            
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index+1}</td>
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.Title}</td>
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">#</td>
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.DueDate}</td>
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                <button onClick={() => tableRowRemove(index)}>X</button>
                                
                                
                                
                                </td>

                            
                        </tr>
                    )
                })
            } */}
            <tr class="hover:bg-lighter bg-gray-100 border-b"  >
                            
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">user</td>
                            <td class="litext-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">select</td>
                            
                                
                                
                                
                                

                            
                        </tr>
            
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    );
}
