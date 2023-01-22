"use client";
import React, { useState } from "react";
import axios from "axios";
import "../../styles/admin.css";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthday, setbirthday] = useState("");
  const [email, setemail] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [userId, setUserId] = useState("");
  const [urlToUSe, setUrlToUse] = useState("");
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("access"))
  );
  const [type, setType] = useState("");

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

  let config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const updateAccessToken = () => {
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        setAccessToken(
          localStorage.setItem("access", JSON.stringify(res.data.access))
        );
      })
      .catch((err) => {
        alert("Error from updating the refresh token!");
      });
  };

  const handleRoleChange = (e) => {
    if (e.target.value === "Admin") {
      setIsSupervisor(true);
      setUrlToUse(SUPERVISORS_URL);
      setType("supervisor");
    }
    if (e.target.value === "Teacher") {
      setIsTeacher(true);
      setUrlToUse(TEACHERS_URL);
      setType("teacher");
    }
    if (e.target.value === "Student") {
      setIsStudent(true);
      setUrlToUse(STUDENTS_URL);
      setType("student");
    }
  };
  const handleCreateUser = (e) => {
    e.preventDefault();

    let body = {
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      is_student: isStudent,
      is_teacher: isTeacher,
      is_supervisor: isSupervisor,
    };

    let userInfo = {
      first_name: e.target.fname.value,
      last_name: e.target.lname.value,
      birthday: e.target.dob.value,
      email: e.target.email.value,
      type: userId,
    };
    axios
      .post(ACCOUNTS_URL, body)
      .then((res) => {
        setUserId(res.data.id);
        userInfo["type"] = res.data.id;
        createAccount(userInfo);
        // TODO: Add alert to let the user know once the account is created. "first name last name was created as a role".
      })
      .catch((err) => {
        updateAccessToken();
        createAccount(userInfo);
        // TODO: Add alert to let the user know has an error.
      });
  };

  const createAccount = (userInfo) => {
    axios
      .post(urlToUSe, userInfo, config)
      .then((res) => {
        alert(
          `${userInfo.first_name} ${userInfo.last_name} is added as a ${e.target.role.value}`
        );
      })
      .catch((err) => {});
  };

  return (
    <>
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
                      id="username"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="email"
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
                      for="subject"
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
                      for="subject"
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
                      for="subject"
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
                      for="subject"
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
                      for="subject"
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
                      for="subject"
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
                    <button className="w-full px-8 py-2 mt-2 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter">
                      Create New User
                    </button>
                  </div>
                </form>
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
