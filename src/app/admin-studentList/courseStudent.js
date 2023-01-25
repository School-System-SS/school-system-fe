"use client";
import '../../styles/admin-list.css'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import swal from "sweetalert";

export default function CourseStudentList() {
  const router = useRouter();
  const [listStudents, setListStudents] = useState("");
  const [listTeachers, setListTeachers] = useState("");
  const [courseName, setCourseName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [teacher, setTeacher] = useState("");
  const STUDENTSROUTES =
    "https://school-system-final-project.herokuapp.com/api/v1/student/get-all/";
  const TEACHERSROUTES =
    "https://school-system-final-project.herokuapp.com/api/v1/teacher/get-all/";
  
  const REFRESH =
    "https://school-system-final-project.herokuapp.com/api/token/refresh/";

  

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        localStorage.setItem("access", JSON.stringify(res.data.access));
        axios
          .get(STUDENTSROUTES, config)
          .then((res) => {
            setListStudents(res.data);
          })
          .catch((err) => {});
        axios
          .get(TEACHERSROUTES, config)
          .then((res) => {
            setListTeachers(res.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, [courseName]);

  const handleChangeCourse = (e) => {
    setCourseName(e.target.value);
  };

  const handleOpenDropDownStudents = () => {
    let element = document.getElementById("dropdownDefaultCheckbox");
    element.classList.toggle("hidden");
  };

  const handleAddingUsers = (e) => {
    if (e.target.checked) {
      setUsersList([...usersList, parseInt(e.target.value)]);
    }
  };

  const handleTeacherChange = (e) => {
    setTeacher(e.target.value);
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const UPDATECOURSE = 
  `https://school-system-final-project.herokuapp.com/api/v1/course/update/${JSON.parse(localStorage.getItem("courseDetails"))["pk"]}`;
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };
    let body = {
      name: e.target.name.value,
      time: e.target.time.value,
      grade_level: e.target.classes.value,
      teacher: teacher,
      student: usersList,
    };
    axios
      .put(UPDATECOURSE, body, config)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Updated Successfully",
          icon: "success",
          buttons: false,
          timer: 1000,
        });
        router.push('/admin-classes')
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Something wrong happened",
          icon: "error",
          buttons: false,
          timer: 1000,
        })
      });
  }

  return (
    <div className="flex items-center justify-center pl-[300px] p-12 general-bg">
      <div className="w-full max-w-[550px]">
        <h2 className="flex items-center justify-center pt-6 text-xl font-bold">
          Edit {JSON.parse(localStorage.getItem("courseDetails"))["grade_level"]} Course
        </h2>
        <section className="relative px-4 py-10 border-l border-r sm:rounded-3xl sm:p-20 ">
          <section className="max-w-md mx-auto">
            <form onSubmit={handleUpdateCourse}>
              <div className="mb-3">
                <label
                  for="name"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={JSON.parse(localStorage.getItem("courseDetails"))["name"]}
                  onChange={handleChangeCourse}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-3">
                <label
                  for="subject"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  Class Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  defaultValue={JSON.parse(localStorage.getItem("courseDetails"))["time"]}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-3">
                <label
                  for="message"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  Class No.
                </label>
                <input
                  type="text"
                  name="classes"
                  id="classes"
                  defaultValue={JSON.parse(localStorage.getItem("courseDetails"))["grade_level"]}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-3">
                <label
                  for="message"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  List of Students
                </label>
                <button
                  id="dropdownCheckboxButton"
                  onClick={handleOpenDropDownStudents}
                  data-dropdown-toggle="dropdownDefaultCheckbox"
                  class="text-white bg-blue-700 hover:bg-blue-800 bg-white  font-medium rounded-lg text-sm px-4 py-2.5 text-right flex justify-between dark:bg-blue-600 dark:hover:bg-blue-700 border w-full items-start"
                  type="button"
                >
                  <p className="text-black">-------------</p>
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownDefaultCheckbox"
                  style={{ backgroundColor: "" }}
                  class="z-10 hidden w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton"
                  >
                    {listStudents &&
                      listStudents.map((item) => {
                        return (
                          <li>
                            <div class="flex items-center bg-white">
                              <input
                                id="checkbox-item-1"
                                type="checkbox"
                                value={item.pk}
                                onChange={handleAddingUsers}
                                class="w-4 h-4 bg-white text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500"
                              />
                              <label
                                for="checkbox-item-1"
                                class="ml-2 text-sm text-gray-900 dark:text-gray-300"
                              >
                                {item.first_name} {item.last_name}
                              </label>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div>
                <label
                  for="message"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  List of Teachers
                </label>
                <select
                  id="teacher"
                  name="teacher"
                  onChange={handleTeacherChange}
                  className="w-full rounded-md border bg-white border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  {listTeachers &&
                    listTeachers.map((item) => {
                      return (
                        <option value={item.pk}>
                          {item.first_name} {item.last_name}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div>
                <button className="w-full px-8 py-2 mt-4 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter">
                  Update
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </div>

    // <section className="TeacherAssignment-2">
    //   <div class="mx-24 flex flex-col mt-[5%] ">
    //     <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    //       <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">
    //         <div class="overflow-hidden">
    //           <table class="min-w-full">
    //             <thead class="bg-darker border-b">
    //               <tr>
    //                 <th
    //                   scope="col"
    //                   class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-3 text-center"
    //                 >
    //                   Full Name
    //                 </th>

    //                 <th
    //                   scope="col"
    //                   class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-3 text-center"
    //                 >
    //                   Role
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody>

    //               <tr class="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
    //                 <td class="litext-sm text-gray-900 font-medium  px-6 py-2 text-center whitespace-nowrap">
    //                   user
    //                 </td>
    //                 <td class="litext-sm text-gray-900 font-medium  px-6 py-2 text-center whitespace-nowrap">
    //                   select
    //                 </td>
    //               </tr>

    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
