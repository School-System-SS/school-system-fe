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
                      class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-3 text-center"
                    >
                      Full Name
                    </th>

                    <th
                      scope="col"
                      class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-3 text-center"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>


                  <tr class="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
                    <td class="litext-sm text-gray-900 font-medium  px-6 py-2 text-center whitespace-nowrap">
                      user
                    </td>
                    <td class="litext-sm text-gray-900 font-medium  px-6 py-2 text-center whitespace-nowrap">
                      select
                    </td>
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
