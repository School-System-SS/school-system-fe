"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

export default function TableAssignmentListOfTeacher() {
  const AssignmentId = JSON.parse(localStorage.getItem("Assignment ID"))

  const URL = "https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/assignment/get-all/";

  const NAMEURL = "https://school-system-final-project.herokuapp.com/api/v1/student/get-all/";

  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  const [studentName, setStudentName] = useState([]);

  const getStudentNames = async () => {
    const res = await axios.get(NAMEURL, config);
    setStudentName(res.data)
  }


  const [allStudent, setAllStudent] = useState([]);

  const getAll = async () => {
    const res = await axios.get(URL + AssignmentId, config);
    setAllStudent(res.data);
  }
  useEffect(() => {
    getAll();
    getStudentNames();
  }, [])


  return (
    <>
      <section>
        <div className="mx-24 flex flex-col ">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-8 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-[900px] min-w-full">
                  <thead className="bg-main border-b text-[#FFFFFF]">
                    <tr>
                      <th
                        scope="col"
                        className="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Student
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left text-center">
                        Submited
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left text-center">
                        Grade
                      </th>
                      <th
                        scope="col"
                        className="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-left text-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allStudent && allStudent.map((item) => {
                      console.log(item, 'ddddddddddddddddddddddddddddddddddddddddd');
                      return (
                        <tr className="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
                          {studentName.filter((name) => name.pk == item.student).map((n) => (

                            <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{n.first_name} {n.last_name}</td>

                          ))
                          }
                          {item.is_submitted ?

                            <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center"> Submited </td>
                            :
                            <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center"> - </td>

                          }

                          {item.grade ?

                            <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center"> {item.grade}</td>

                            :
                            <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center"> - </td>

                          }
                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center"> <button className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                          </svg>
                          </button></td>
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

      {/* <div id="extralarge-modal" className="fixed top-0 left-0 right-0 z-50 w-[80%] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-[80%] h-full max-w-5xl md:h-auto">
          <div className="relative bg-lighter rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Extra Large modal
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-hide="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
          </div>
        </div>
      </div> */}


    </>
  )
}
