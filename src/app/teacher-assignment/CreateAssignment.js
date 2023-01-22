import React, { useState } from "react";
import "../../styles/teacher.css";
import axios from "axios";

export default function Create_assignment() {

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
      points: 10,
      course: 1,
      teacher: JSON.parse(localStorage.getItem("userId"))
    };

    axios
      .post(URL, body,config)
      .then((res) => {
    const STUURL = 'https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/create/';
        axios
      .post(STUURL, {course:1,assignment:res.data.pk},config)
      .then((res1) => {
        alert("Create Successfully");
      })
      .catch((err) => {
        alert(err,"error");
      })
      })
      .catch((err) => {
        alert(err,"error");
      })
  }

  return (

    <section className="TeacherAssignment-1">

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between ">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Create assignment</h2>
          </div>
          <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
        </div>
        <div className="rounded bg-white max-w-md  overflow-hidden shadow-xl p-9 content-center">
          <form className="space-y-4" onSubmit={createOneAssignment} >
            <input type="hidden" name="remember" value="True" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="grid gap-6">
                <div className="col-span-12">
                  <input
                    type="text"
                    name="Title"
                    id="Title"
                    placeholder="Title"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-12">
                  <input
                    type="date"
                    name="DueDate"
                    id="DueDate"
                    placeholder="Due Date"
                    className=" focus:ring-indigo-700 focus:border-indigo-700 block w-full  sm:text-lg border-gray-600 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="w-full rounded dark:bg-gray-800"
                placeholder="Description"
              />
            </div>
            <div>
              <button
                className="bg-darker text-[#FFFFFF] py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-main"
                type="submit"
                id="btnsubmit">
                Assign
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
