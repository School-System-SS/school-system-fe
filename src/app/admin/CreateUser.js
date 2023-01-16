"use client";

import axios from "axios";
import "../../styles/admin.css";

export default function CreateUser() {
  const URL =
    "https://school-system-final-project.herokuapp.com/account/signup/";

  const handleCreateUser = (e) => {
    e.preventDefault();
    let body = {
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      firstname: e.target.fname.value,
      lastname: e.target.lname.value,
      birthday: e.target.dob.value,
      email: e.target.email.value,
      role: e.target.role.value,
    };
    axios
      .post(URL, body)
      .then((res) => {
        alert(`${body["username"]} is added.`);
      })
      .catch((err) => {
        alert(`ERROR`);
      });
  };
  return (
    <>
      <h2 className="flex items-center justify-center p-6 text-xl font-bold">
        Create New User
      </h2>
      <div className="flex items-center justify-center p-12 admin-grid-1">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleCreateUser}>
            <div className="mb-2">
              <label
                for="name"
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
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
                className="mb-2 block text-base font-medium text-darker"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div>
              <button className="hover:shadow-form mt-2 w-full rounded-md bg-lighter text-base hover:bg-main py-2 px-8 font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
