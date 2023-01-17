"use client";

import axios from "axios";
import "../../styles/admin.css";

export default function CreateUser() {

  const handleOpenList = () => {
    const elmnt = document.getElementById("dropdownSearch");
    elmnt.classList.toggle("hidden")
}

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
      
      <div className="flex items-center justify-center p-12 admin-grid-2">
        <div className="mx-auto w-full max-w-[550px]">
        <h2 className="flex items-center justify-center p-6 text-xl font-bold">
        Create New User
      </h2>
      <section className="flex flex-col justify-center min-h-screen py-6 bg-center bg-cover bg-fixedbg-gray-100 bg-form-pattern bg- sm:py-12" >
                <section className="relative py-3 sm:max-w-xl sm:mx-6 ">
                    
                    <section className="relative px-4 py-10 bg-white shadow-inner shadow-lighter sm:rounded-3xl sm:p-20 ">
                        <section className="max-w-md mx-auto">
                            
                            <section className="sectionide-y sectionide-lighter"></section>
      
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
        </div>



        {/* <button id="dropdownSearchButton" onClick={handleOpenList} data-dropdown-toggle="dropdownSearch" class="relative rounded-md border border-[#E0E0E0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full mb-1 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Users
                            <svg class="w-4 h-4 mr-6 absolute right-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

                        </button> */}


        {/* <div id="dropdownSearch" class="z-10 hidden bg-white rounded shadow w-full dark:bg-gray-700 w-full ">

          <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownSearchButton">
            {users && users.map((item) => {
              return (

                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input id={item.id} type="checkbox" value={item.id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label for="checkbox-item-17" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{item.firstname} {item.lastname} | {item.role}</label>
                  </div>
                </li>
              )
            })}
          </ul>


        </div> */}





          </section>
          </section>
          </section>
          </section>
          </div>
      </div>
    </>
  );
}
