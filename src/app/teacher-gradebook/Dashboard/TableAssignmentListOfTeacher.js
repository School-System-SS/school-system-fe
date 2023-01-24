"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import GradedModal from "./GradedModal";

export default function TableAssignmentListOfTeacher() {

  const [show, setShow] = useState(false);
  const [stdName, sendName] = useState([]);
  const [stditem, setItem] = useState([]);
  const [description, setDescription] = useState();
  const AssignmentId = JSON.parse(localStorage.getItem("Assignment ID"))
  const DESCR = `https://school-system-final-project.herokuapp.com/api/v1/assignment/get-one/${AssignmentId}`;

  const getDescription = async () => {
    const res = await axios.get(DESCR, config);
    setDescription(res.data.description)
  }



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
        <div className="ml-[200px] my-20 flex flex-col ">
          <h1></h1>
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
                    {allStudent && allStudent.map((item, index) => {
                      return (
                        <tr className="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
                          {studentName.filter((name) => name.pk == item.student).map((n) => (

                            <>
                              <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{n.first_name} {n.last_name}</td>

                              {item.is_submitted ?

                                <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center" > Submited </td>
                                :
                                <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center" > - </td>

                              }

                              {item.grade ?

                                <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center" > {item.grade}</td>

                                :
                                <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center" > - </td>

                              }
                              <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap text-center" >
                                <button onClick={() => {

                                  getDescription();
                                  setShow(!show);
                                  sendName(n);
                                  setItem(item);


                                }}


                                >
                                  {item.is_submitted &&
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                  }
                                </button></td>
                            </>

                          ))
                          }
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
      <GradedModal
        show={show}
        close={() => setShow(false)}
        fName={stdName.first_name}
        lName={stdName.last_name}
        stditem={stditem}
        ds={description}
      />



    </>
  )
}
