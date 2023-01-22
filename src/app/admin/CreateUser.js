"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/admin.css";

export default function CreateUser() {
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [userId, setUserId] = useState("");
  const [urlToUSe, setUrlToUse] = useState("");
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("access"))
  );
  const [type, setType] = useState("");
  const [refresh, setRefresh] = useState("");


  const ACCOUNTS_URL =
    "https://school-system-final-project.herokuapp.com/accounts/signup/";
  const SIGNIN = "https://school-system-final-project.herokuapp.com/api/token/";
  const REFRESH =
    "https://school-system-final-project.herokuapp.com/api/token/refresh/";
  const STUDENTS_URL =
    "https://school-system-final-project.herokuapp.com/api/v1/student/create/";
  const TEACHERS_URL =
    "https://school-system-final-project.herokuapp.com/api/v1/teacher/create/";
  const SUPERVISORS_URL =
    "https://school-system-final-project.herokuapp.com/supervisor/create/";

  useEffect(() => {
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        localStorage.setItem("access", JSON.stringify(res.data.access));
      })
      .catch((err) => {});
  }, [refresh]);

  const handleChange = (e) => {
    setRefresh(e.target.value);
  };

  const handleRoleChange = (e) => {
    if (e.target.value === "Admin") {
      setIsSupervisor(true);
      setIsTeacher(false);
      setIsStudent(false);
      setUrlToUse(SUPERVISORS_URL);
      setType("supervisor");
    }
    if (e.target.value === "Teacher") {
      setIsSupervisor(false);
      setIsTeacher(true);
      setIsStudent(false);
      setUrlToUse(TEACHERS_URL);
      setType("teacher");
    }
    if (e.target.value === "Student") {
      setIsSupervisor(false);
      setIsTeacher(false);
      setIsStudent(true);
      setUrlToUse(STUDENTS_URL);
      setType("student");
    }
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let body = {
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      is_student: isStudent,
      is_teacher: isTeacher,
      is_supervisor: isSupervisor,
    };

    let CreateBody = {
      first_name: e.target.fname.value,
      last_name: e.target.lname.value,
      email: e.target.email.value,
      birthday: e.target.dob.value,
      type: userId,
    };
    axios
      .post(ACCOUNTS_URL, body)
      .then((res) => {
        CreateBody["type"] = res.data.id;
        setUserId(res.data.id);
        axios
          .post(urlToUSe, CreateBody, config)
          .then((res) => {
            alert("added");
          })
          .catch((err) => {});
      })
      .catch((err) => {});

  };

  return (
    <div className="flex items-center justify-center p-12 admin-grid-2">
      <div className="mx-auto w-full max-w-[550px]">
        <h2 className="flex items-center justify-center p-6 text-xl font-bold">
          Create New User
        </h2>
        <section className="relative py-3 sm:max-w-xl sm:mx-6 ">
          <section className="relative px-4 py-10 bg-white shadow-inner shadow-lighter sm:rounded-3xl sm:p-20 ">
            <section className="max-w-md mx-auto">
              <form onSubmit={handleCreateUser}>
                <div className="mb-2">
                  <label
                    for="name"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    id="username"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="fname"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="lname"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="email"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="password"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="password2"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Password 2
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="dob"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-2">
                  <label
                    for="role"
                    className="block mb-2 text-base font-medium text-darker"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    onChange={handleRoleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-2 mt-2 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter"
                  >
                    Create New User
                  </button>
                </div>
              </form>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}
