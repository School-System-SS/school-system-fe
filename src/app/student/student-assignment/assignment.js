"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import StudentHeader from "../student-dashboard/StudentHeader";

// data.description

export default function Assignment() {
  const [getAllAssignment, setgetAllAssignment] = useState([]);
  const [mainAssignment, setMainAssignment] = useState([]);
  const dataArr = [];

  const URL_STUDENT_ASSIGNMENT = `https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/course/get-all/${JSON.parse(
    localStorage.getItem("courseId")
  )}`;
  const REFRESH =
    "https://school-system-final-project.herokuapp.com/api/token/refresh/";
  const URL_ASSIGNMENT =
    "https://school-system-final-project.herokuapp.com/api/v1/assignment/get-one/";

  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };

  useEffect(() => {
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        localStorage.setItem("access", JSON.stringify(res.data.access));
        axios
          .get(URL_STUDENT_ASSIGNMENT, config)
          .then((res) => {
            setgetAllAssignment(res.data);

            res.data.map((item) => {
              axios
                .get(URL_ASSIGNMENT + item.assignment, config)
                .then((res) => {
                  const assignmentObject = {
                    pk: res.data.pk,
                    title: res.data.title,
                    dueDate: res.data.due_date,
                    description: res.data.description,
                    points: res.data.points,
                  };
                  dataArr.push(assignmentObject);
                  setMainAssignment([...dataArr, assignmentObject]);
                  console.log(res.data)
                });
            });
          })
          .catch((err) => { });
      })
      .catch((err) => { });
  }, []);

  const route = useRouter();

  const Details = (item, i) => {
    localStorage.setItem("id", JSON.stringify(item));
    localStorage.setItem("item", JSON.stringify(i));
    route.push("/student/student-assignment/details");
  };

  return (
    <section>
      
      <section className="w-[150%] h-full my-[10%] ml-[22%]">
        <div className="relative overflow-x-auto border shadow-md sm:rounded-xl ">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-[#FFFFFF] dark:text-gray-400 border bg-main">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 border hover:bg-gray-50 dark:bg-gray-800"
                >
                  Assignment Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border bg-gray-50 dark:bg-gray-800"
                >
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 border">
                  Submition Date
                </th>
                <th scope="col" className="px-6 py-3 border">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 border">
                  Solve
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllAssignment &&
                getAllAssignment.map((item, index) => {
                  return (
                    <tr className="border border-gray-200 cursor-pointer dark:border-gray-700">
                      <th
                        scope="row"

                        className="px-6 py-4 font-medium text-gray-900 border whitespace-nowrap bg-gray-50"
                      >
                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {

                              return i.title;
                            }
                          })}
                      </th>
                      <td className="px-6 py-4 border bg-gray-50 dark:bg-gray-800">
                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {
                              return (
                                <>{item.is_submitted ? (<>{item.grade}</>) : (<>-</>)} / {i.points}</>
                              )
                            }
                          })}
                      </td>

                      <td className="px-6 py-4 border">
                        {item.is_submitted ? (
                          <>{item.submitted_date}</>
                        ) : (
                          <> - </>
                        )}
                      </td>
                      <td className="px-6 py-4 border">
                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {

                              return i.dueDate;
                            }
                          })}
                      </td>
                      <td className="px-6 py-4 border">

                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {

                              return <a onClick={() => Details(item, i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-[#489a24] ml-[27%] w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>

                              </a>;
                            }
                          })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
