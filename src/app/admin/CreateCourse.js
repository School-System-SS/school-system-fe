'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateCourse(props) {

    const [users, setUsers] = useState('');
    const router = useRouter();




    const handleOpenList = () => {
        const elmnt = document.getElementById("dropdownSearch");
        elmnt.classList.toggle("hidden")
    }
    let config = {
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('access'))}`
        }
    }

    useEffect(() => {
        const URLUSERS = "https://school-system-final-project.herokuapp.com/account/getUsers/"
        axios
            .get(URLUSERS, config)
            .then((res) => {
                // res.data.map((item)=>{
                //     let obj = {
                //       "id":item.id,
                //       "username": item.username,
                //       "role": item.role,
                //     }
                setUsers(res.data);

                //   })
            })
            .catch((error) => {
                updateToken();
                router.refresh();
            })

    }, [])

    const URL =
        "https://school-system-final-project.herokuapp.com/course/create/";

    const handleCreateCourse = (e) => {
        e.preventDefault();
        console.log(users);
        // let body = {
        //     name: e.target.name.value,
        //     user: e.target.user.value,
        //     time: e.target.time.value,
        //     classes: e.target.classes.value,
        // };


        // axios
        //     .post(URL, body)
        //     .then((res) => {
        //         alert(`${body["username"]} is added.`);
        //     })
        //     .catch((err) => {
        //         alert(`ERROR`);
        //         updateToken();
        //         handleCreateCourse();
        //     });
    };
    const URLTOKEN = "https://school-system-final-project.herokuapp.com/api/token/refresh/";

    const updateToken = () => {
        let body = {
            refresh: JSON.parse(localStorage.getItem('refresh'))
        };

        axios
            .post(URLTOKEN, body)
            .then((res) => {
                localStorage.setItem("refresh", JSON.stringify(res.data["refresh"]));
                alert("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
            })
            .catch((err) => {
                alert(`ERROR`);
            });
    }

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form
                        onSubmit={handleCreateCourse}
                    >
                        <div className="mb-5">
                            <label
                                for="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Course Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Course Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Username"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="subject"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Class Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="message"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                class No.
                            </label>
                            <input
                                type="number"
                                name="classes"
                                id="classes"
                                placeholder="class No."
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                        </div>



                        <button id="dropdownSearchButton" onClick={handleOpenList} data-dropdown-toggle="dropdownSearch" class="relative rounded-md border border-[#E0E0E0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md w-full mb-1 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Users
                            <svg class="w-4 h-4 mr-6 absolute right-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

                        </button>

                        <div id="dropdownSearch" class="z-10 hidden bg-white rounded shadow w-full dark:bg-gray-700 w-full ">
                            {/* <div class="p-3">
                                        <label for="input-group-search" class="sr-only">Search</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" id="input-group-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
                                        </div>
                                    </div> */}
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


                        </div>

                        <div>
                            <button
                                className="hover:shadow-form rounded-md hover:bg-main py-3 px-8 text-base font-semibold text-white outline-none mt-4 w-full bg-lighter"
                            >
                                Create New Course
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
