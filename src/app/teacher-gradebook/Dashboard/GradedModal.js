'use client'

import axios from "axios";
import React, { useEffect } from "react";


export default function GradedModal({ show, close, fName, lName, stditem }) {

    const URL_ASSIGNMENT = `https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/update/${stditem.pk}`;

    let config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
        },
    };



    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        let body = {
            grade: e.target.points.value,


        };
        console.log(body, 'dffffffffffffffffffffffffffffffffffffffff');
        axios
            .put(URL_ASSIGNMENT, body, config)
            .then((res) => {
                alert("submites");
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (

        <>
            {show &&

                <form onSubmit={handleUpdateAssignment}>

                    <div id="extralarge-modal" className="fixed ml-[20%] z-50 w-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                        <div className="relative w-[80%] h-full max-w-5xl md:h-auto">
                            <div className="relative bg-lighter rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white font-bold text-3xl">
                                        {fName} {lName}
                                    </h3>
                                    <button type="button" onClick={close} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-2xl font-bold">
                                        Status : {stditem.is_submitted ? <span className="text-base"> Submited </span> : <span className="text-base">Not Submited Yet</span>}
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-bold text-2xl">
                                        Attachment
                                    </p>
                                    <p>
                                        {stditem.attachment ? <span> {stditem.attachment} </span> : <span className="font-bold">No Attachment</span>}
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-bold text-2xl">
                                        Grade
                                    </p>
                                    <p>
                                        <input
                                            type="number"
                                            name="points"
                                            id="points"
                                            defaultValue={stditem.grade}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </p>

                                </div>

                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    {/* <button data-modal-hide="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button> */}
                                    <button type="submit" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>

    )
}
