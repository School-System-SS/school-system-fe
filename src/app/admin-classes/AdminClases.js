import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminClases() {
  const router = useRouter();
  const [allCourses, setallCourses] = useState("");
  const [Courses, setCourse] = useState({});

  const REFRESH =
    "https://school-system-final-project.herokuapp.com/api/token/refresh/";
  const COURSES_URL =
    "https://school-system-final-project.herokuapp.com/api/v1/course/admin/get-all/";
  const DELETE_COURSES =
    "https://school-system-final-project.herokuapp.com/api/v1/course/delete/";

  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  useEffect(() => {
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        localStorage.setItem("access", JSON.stringify(res.data.access));
        axios
          .get(COURSES_URL, config)
          .then((res) => {
            setallCourses(res.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, []);

  const handelDeleteCousres = (item) => {
    
    axios.delete(DELETE_COURSES + item.pk, config).then((res) => {
      alert("Deleted");
    });
  };

  function handelOpenCourseUsers(item) {
    localStorage.setItem("courseDetails", JSON.stringify(item));
    router.push("/admin-studentList");
  }

  return (
    <section className="mt-[3%] ml-[7%]">
      <div class="  flex flex-wrap  rounded-lg py-4 mt-2 hover:cursor-pointer">
        {allCourses &&
          allCourses.map((item, index) => {
            return (
              <div
                onClick={() => handelOpenCourseUsers(item)}
                class="flex items-center ml-[1%] h-14 w-[15%]  bg-lighter hover:bg-main text-[#FFFFFF] rounded-lg "
              >
                <div
                  style={{
                    marginButton: 0,
                  }}
                  class="text-sm  text-center  ml-[5%] "
                >
                  <p className="h-full mb-0">{item.grade_level}</p>
                </div>
                <div class="flex items-center ml-auto space-x-2  h-full">
                  <button
                    onClick={() => handelDeleteCousres(item)}
                    type="button"
                    class=" text-draker  rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-8 w-8 "
                    data-dismiss-target="#toast-undo"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white "
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="red"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
