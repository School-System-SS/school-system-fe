'use client';
import { useState, useEffect } from "react";
import StudentHeader from "src/app/student/student-dashboard/StudentHeader.js";

function details() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('id'));
        setData([id]);
    }, [])

    return (
        <section className="mt-[5%]">
            <header className="px-6 py-6">
                <ul>
                    <li>
                        <a href="/student/student-assignment">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </header>

            <StudentHeader />

            {data && Array.isArray(data) && data.map((x) => {
                return (
                    <section className='w-[70%] h-full ml-[30%]'>

                        <div id="staticModal" data-modal-backdrop="static" className="break-words md:inset-0 h-modal md:h-full">
                            <div className="relative w-full h-full max-w-2xl md:h-auto rounded-xl border">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-start justify-between text-[#FFFFFF] bg-darker p-4 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {x.assignmentName}
                                        </h3>

                                        <p>{x.dueDate}</p>

                                    </div>
                                    <div className="p-6 space-y-6">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Description</h3>
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
                                            {x.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center w-[90%] ml-[5%]">
                                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>

                                    <div className="flex items-center p-6 space-x-2 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="staticModal" type="button" className="text-main bg-white hover:bg-darker rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-[#FFFFFF]">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>
    )
}
export default details;
