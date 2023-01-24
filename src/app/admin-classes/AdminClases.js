import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

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
      swal({
        title: "Good job!",
        text: "Deleted Successfully",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
      setTimeout(window.location.reload(), 1500)
    });
  };

  function handelOpenCourseUsers(item) {
    localStorage.setItem("courseDetails", JSON.stringify(item));
    router.push("/admin-studentList");
  }

  return (
    <section class=" ml-[300px] flex flex-wrap gap-4 rounded-lg py-4 hover:cursor-pointer">
      {allCourses &&
        allCourses.map((item, index) => {
          return (
            <div class="flex items-center justify-around h-14 min-w-[150px]  bg-lighter hover:bg-main text-[#FFFFFF] rounded-lg ">
              <p className="px-3">{item.grade_level}</p>
              <button
                onClick={() => handelOpenCourseUsers(item)}
                type="button"
                class=" text-draker  rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex h-8 w-8 "
                data-dismiss-target="#toast-undo"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
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
          );
        })}
    </section>
  );
}
