'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function Edit() {

    return (
        <>
            <div className="flex items-center justify-center p-12 admin-grid-1">
                <div className="mx-auto w-full max-w-[550px]">
                    <h2 className="flex items-center justify-center p-6 text-xl font-bold">
                        Edit
                    </h2>
                    <section className="flex flex-col justify-center min-h-screen py-6 bg-center bg-cover bg-fixedbg-gray-100 bg-form-pattern bg- sm:py-12" >
                        <section className="relative py-3 sm:max-w-xl sm:mx-6 ">
                            <section className="relative px-4 py-10 bg-white shadow-inner shadow-lighter sm:rounded-3xl sm:p-20 ">
                                <section className="max-w-md mx-auto">
                                    <section className="sectionide-y sectionide-lighter"></section>

                                    <form>
                                        <div className="mb-3">

                                            <input
                                                type="text"
                                                name="name"
                                                id="Username"
                                                placeholder="Username"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div className="mb-3">

                                            <input
                                                type="text"
                                                name="firstname"
                                                id="FirstName"
                                                placeholder="First Name"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                            />
                                        </div>
                                        <div className="mb-3">

                                            <input
                                                type="text"
                                                name="name"
                                                id="Lastname"
                                                placeholder="Last Name"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                            />
                                        </div>
                                        <div className="mb-3">

                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                            />
                                        </div>
                                        <div className="mb-3">

                                            <input
                                                type="date"
                                                name="dob"
                                                id="dob"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                        <div>
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
                                            <button className="w-full px-8 py-2 mt-2 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter"                            >
                                                Edit
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
