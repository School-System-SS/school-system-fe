'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GradedModal({ show, close, fName, lName, stditem, ds }) {
    

    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const URL_ASSIGNMENT = `https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/update/${stditem.pk}`;

    let config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
        },
    };

        let body = {
            grade: e.target.points.value,
        };
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

                    <div id="extralarge-modal" className="fixed ml-[350px] mb-5 z-50 w-full p-10 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                        <div className="relative w-[80%] h-full max-w-5xl md:h-auto">
                            <div className="relative bg-[#FFFFFF] shadow-xl rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-5 border-b rounded-t bg-main text-[#FFFFFF] dark:border-gray-600">
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
                                        Status: {stditem.is_submitted ? <span className="text-base"> Submited </span> : <span className="text-base">Not Submited Yet</span>}
                                    </p>
                                 
                                    
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-bold text-2xl">
                                    Description:
                                    </p>
                                    <p>
                                    {ds}
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
                                            className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </p>

                                </div>

                                <div className="flex bg-main text-[#FFFFFF] items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button type="submit" className="bg-lighter py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-darker hover:cursor-pointer no-underline">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>

    )
}
