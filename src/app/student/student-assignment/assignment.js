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
                });
            });
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }, []);

  const route = useRouter();
  const Details = (arg) => {
    localStorage.setItem("id", JSON.stringify(arg));
    route.push("/student/student-assignment/details");
  };

  return (
    <section>
      <StudentHeader />
      <section className="w-[70%] h-full my-[10%] ml-[15%]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-xl border ">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
            <thead className="text-xs text-[#FFFFFF] dark:text-gray-400 border bg-main">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 hover:bg-gray-50 dark:bg-gray-800 border"
                >
                  Assignment Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border"
                >
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 border">
                  Submition Date
                </th>
                <th scope="col" className="px-6 py-3 border">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllAssignment &&
                getAllAssignment.map((item, index) => {
                  return (
                    <tr className="cursor-pointer border border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        onClick={() => Details(item)}
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50   border"
                      >
                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {
                              return i.title;
                            }
                          })}
                      </th>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border">
                        {mainAssignment
                          .filter((j) => j.pk == item.assignment)
                          .map((i, index) => {
                            if (index === 0) {
                              return (
                                <>{item.is_submitted?(<>{item.grade}</>):(<>-</>)} / {i.points}</>
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
