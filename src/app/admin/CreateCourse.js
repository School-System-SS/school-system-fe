"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateCourse(props) {
  const router = useRouter();
  const [listStudents, setListStudents] = useState("");
  const [listTeachers, setListTeachers] = useState("");
  const [courseName, setCourseName] = useState("");
  const [usersList, setUsersList] = useState([])
  const [teacher, setTeacher] = useState("")
  const STUDENTSROUTES = "https://school-system-final-project.herokuapp.com/api/v1/student/get-all/";
  const TEACHERSROUTES = "https://school-system-final-project.herokuapp.com/api/v1/teacher/get-all/";
  const CREATECOURSE = "https://school-system-final-project.herokuapp.com/api/v1/course/create/";
  const REFRESH = "https://school-system-final-project.herokuapp.com/api/token/refresh/";

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
        setUsersList([...usersList,parseInt(e.target.value)])
    }
  }

  const handleTeacherChange = (e) => {
    setTeacher(e.target.value)
  }

  const handleCreateCourse = (e) => {
    e.preventDefault();
    let body = {
        name: e.target.name.value,
        time: e.target.time.value,
        grade_level: e.target.classes.value,
        teacher: teacher,
        student: usersList
    }
    axios
    .post(CREATECOURSE, body, config)
    .then((res) => {alert("course added")})
    .catch((err) => {alert("error adding course")})
  };

  return (
    <>
      <div className="flex items-center justify-center p-12 admin-grid-1">
        <div className="mx-auto w-full max-w-[550px]">
          <h2 className="flex items-center justify-center p-6 text-xl font-bold">
            Create Course
          </h2>
          <section className="flex flex-col justify-center min-h-screen py-6 bg-center bg-cover bg-fixedbg-gray-100 bg-form-pattern mb-[40%] bg- sm:py-12">
            <section className="relative py-3 sm:max-w-xl sm:mx-6 ">
              <section className="relative px-4 py-10 shadow-inner shadow-lighter sm:rounded-3xl sm:p-20 ">
                <section className="max-w-md mx-auto">
                  <section className="sectionide-y sectionide-lighter"></section>
                  <form onSubmit={handleCreateCourse}>
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
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border w-full"
                        type="button"
                      >
                        <p className="text-black">-------</p>
                        <svg
                          class="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
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
                                  <div class="flex items-center">
                                    <input
                                      id="checkbox-item-1"
                                      type="checkbox"
                                      value={item.pk}
                                      onChange={handleAddingUsers}
                                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                        Create New Course
                      </button>
                    </div>
                  </form>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
