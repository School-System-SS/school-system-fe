import React from 'react'




export default function AssignmentTeacherView({tableData,tableRowRemove}) {
    return (
        
        <section className="TeacherAssignment-2">
        <div class="mx-24 flex flex-col ">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">
            <h5 class="text-center">Assignment will created inside this Table</h5>

              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-darker border-b">
                    <tr>
                      <th
                        scope="col"
                        class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4 text-left">
                        Assignments
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Submissions
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        DueDate
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
                  {
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
            }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        
    );
}
