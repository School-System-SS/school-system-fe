import React from "react";
import "../styles/Tuition.css";

export default function Tuition() {
  return (
    <section id="Tuition">
      <h1 className="text-3xl text-center mb-4 text-black">Anual Fees</h1>
      <div className="my-3 w-28 h-1 div-color-design missionLine"></div>
      <div class="mx-24 flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-darker border-b">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-tl-2xl hover text-md font-medium text-white px-6 py-3 text-left"
                    >
                      Grade Level
                    </th>
                    <th
                      scope="col"
                      class="text-md font-medium text-white px-6 py-3 text-center"
                    >
                      National
                    </th>
                    <th
                      scope="col"
                      class="text-md font-medium text-white px-6 py-3 text-center"
                    >
                      SAT
                    </th>
                    <th
                      scope="col"
                      class="rounded-tr-2xl text-md font-medium text-white px-6 py-3 text-center"
                    >
                      IG
                    </th>
                  </tr>
                </thead>
                <tbody className="hover:text-lighter">
                  <tr class="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
                    <td class=" px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      First to Fifth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      800$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1000$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1200$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter  bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      Sixth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1200$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1500$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1700$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      Seventh Grade{" "}
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1200$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1600$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1800$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      Eighth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1300$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1700$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1900$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      {" "}
                      Ninth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1400$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1800$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2000$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      {" "}
                      Tenth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1500$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1900$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2200$
                    </td>
                  </tr>

                  <tr class="hover:bg-lighter  bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      {" "}
                      Eleventh Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1600$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2000$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2400$
                    </td>
                  </tr>
                  <tr class="hover:bg-lighter bg-gray-100 border-b">
                    <td class="px-6 py-3 whitespace-nowrap text-md font-medium text-gray-900">
                      {" "}
                      Twelfth Grade
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      1800$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2200$
                    </td>
                    <td class=" px-6 py-3 whitespace-nowrap text-center text-md font-medium text-gray-900">
                      2700$
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
