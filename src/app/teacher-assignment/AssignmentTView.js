import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AssignmentTeacherView() {

    const URLDEL = `https://school-system-final-project.herokuapp.com/api/v1/assignment/delete/`;
    const URL = "https://school-system-final-project.herokuapp.com/api/v1/assignment/get-all/";
    
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };


  const DeleteAss =(data)=>{
    axios
    .delete(URLDEL+data.pk,config)
    .then((res)=>{
      alert("Deleted")
    })
    
  }

const courseId=JSON.parse(localStorage.getItem("courseId"))
  const [getAllAssignment, setgetAllAssignment] = useState([]);

  const getAll = async () => {
    
    const res = await axios.get(URL, config);
    setgetAllAssignment(res.data);

  }
  useEffect(() => {
    getAll()
  }, [])
const filteredCourse=getAllAssignment.filter(item=>courseId==item.course)

  return (

    <section className="">
      <div className="mx-24 flex flex-col ">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-8 lg:px-8">

            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-darker border-b text-[#FFFFFF]">
                  <tr>
                    <th
                      scope="col"
                      className="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left">
                      Assignments
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Submissions
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      DueDate
                    </th>
                    <th
                      scope="col"
                      className="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"

                    >
                      Delete
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {filteredCourse && filteredCourse.map((data, index) => {
                    console.log(data);
                      return (
                        <tr className="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b" key={index} >

                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{index +1}</td>
                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{data.title}</td>
                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">#</td>
                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">{data.due_date}</td>
                          <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap">
                            <button onClick={()=>DeleteAss(data)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </button>
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
