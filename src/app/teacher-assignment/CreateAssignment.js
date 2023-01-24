import React, { useState } from "react";
import axios from "axios";
import { Side } from "../teacher-dashboard/Side";
import AssignmentTeacherView from "./AssignmentTView";
import { useRouter } from "next/navigation";

export default function Create_assignment() {
  const router = useRouter();

  const createOneAssignment = (e) => {
    e.preventDefault()
    const URL = 'https://school-system-final-project.herokuapp.com/api/v1/assignment/create/';
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };
    let body = {
      title: e.target.Title.value,
      description: e.target.message.value,
      due_date: e.target.DueDate.value,
      points: e.target.points.value,
      course: JSON.parse(localStorage.getItem("courseId")),
      teacher: JSON.parse(localStorage.getItem("userId"))
    };

    axios
      .post(URL, body, config)
      .then((res) => {
        const STUURL = 'https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/create/';
        axios
          .post(STUURL, { course: JSON.parse(localStorage.getItem("courseId")), assignment: res.data.pk }, config)
          .then((res1) => {
            // alert("Create Successfully");
            window.location.reload();

          })
          .catch((err) => {
            alert(err, "error");
          })
      })
      .catch((err) => {
        alert(err, "error");
      })
  }

  return (

    <section className="flex">
      <section className="h-full w-[30%] flex flex-row">
        <Side />
      </section>
      <section className="w-full ">

        <div className=" ml-[5%] grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 rounded-lg md:grid-cols-2 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between ">
            <div className="space-y-2">
              <h2 className="text-4xl ml-[5%] font-bold leading-tight lg:text-5xl">Create assignment</h2>
            </div>
            <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className=" h-52 md:h-64" />
          </div>
          <div className="relative  sm:rounded-3xl  ">
            <form className="space-y-4" onSubmit={createOneAssignment} >
              <input type="hidden" name="remember" value="True" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      for="name"
                      className="block mb-2 text-base font-medium text-darker"
                    >
                      Assignment Title
                    </label>
                    <input
                      type="text"
                      name="Title"
                      id="Title"
                      placeholder="Title"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      for="name"
                      className="block mb-2 text-base font-medium text-darker"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      name="DueDate"
                      id="DueDate"
                      placeholder="Due Date"
                      className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      for="name"
                      className="block mb-2 text-base font-medium text-darker"
                    >
                      Points
                    </label>
                    <input
                      type="number"
                      name="points"
                      id="points"
                      placeholder="10/10"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="name"
                  className="block mb-2 text-base font-medium text-darker"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Description"
                />
              </div>

              <button
                className="w-full px-8 py-2 mt-4 text-base font-semibold text-[#FFFFFF] rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter"
                type="submit"
                id="btnsubmit">
                Assign
              </button>

            </form>
          </div>
        </div>

        <AssignmentTeacherView />
      </section>

    </section>
  );
}
