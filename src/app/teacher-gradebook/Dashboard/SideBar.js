
'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SideBar(props) {
  const router = useRouter();

  const URL = "https://school-system-final-project.herokuapp.com/api/v1/assignment/get-all/";

  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  const courseId = JSON.parse(localStorage.getItem("courseId"))
  const [getAllAssignment, setgetAllAssignment] = useState([]);

  const getAll = async () => {

    const res = await axios.get(URL, config);
    setgetAllAssignment(res.data);

  }
  useEffect(() => {
    getAll()
  }, [])
  const filteredCourse = getAllAssignment.filter(item => courseId == item.course)

  const CurrAssignment = (item) => {
    localStorage.setItem("Assignment ID", JSON.stringify(item.pk));
    router.push(`/teacher-gradebook/assignment`);
  }
  return (

    <section className="fixed h-full">
      <div className=" bg-main relative h-full" >
        <div className="pt-4 pb-2 px-6 ">
          <div className="flex relative items-center">
            <div className="shrink-0">
              <img src="https://icons.iconarchive.com/icons/iconica/pastel/128/scheduled-tasks-icon.png" className="h-3  sm:h-7" alt="Flowbite Logo" />
            </div>
            <div className="grow ml-3">
              <p className="text-[#FFFFFF] mb-0 h-full font-semibold ">Assignments</p>
            </div>
          </div>
        </div>
        <ul className="text-[#FFFFFF] mt-[20%] px-1">
          {filteredCourse.map(item => {
            return (
              <section>
                <li class="relative">
                  <a class="text-white flex items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-blue-600  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                    <img src="https://icons.iconarchive.com/icons/dryicons/aesthetica-2/128/page-accept-icon.png" class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
                    <span><button className="hover:text-[#c59035]" onClick={() => CurrAssignment(item)}> {item.title}</button></span>
                  </a>
                </li>
                <hr class="my-2" />
              </section>
            )
          })}
        </ul>
      </div>
    </section>

  )
}






