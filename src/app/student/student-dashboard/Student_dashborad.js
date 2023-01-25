"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../student-dashboard/page.css";

export default function Student_dashborad() {
  const [getAllCourses, setgetAllCourses] = useState([]);

  const URL_STUDENT_COURSE =
    "https://school-system-final-project.herokuapp.com/api/v1/course/students/get-all/";

  const router = useRouter();

  const SendPK = (item) => {
    localStorage.setItem("courseId", JSON.stringify(item.pk));
    router.push("/student/student-assignment");
  };

  

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };
    axios
      .get(URL_STUDENT_COURSE, config)
      .then((res) => {
        setgetAllCourses(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <section className=" justify-center ml-[300px] mt-5 ">
      <div className="container  mt-2  ">
        {getAllCourses &&
          getAllCourses.map((item) => {
            return (
              <div onClick={() => SendPK(item)} className=" services">
                <div className="face face1">
                  <div className="content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="h-16 ml-[50%] -translate-x-1/2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>

                    <h3>{item.name}</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content mt-[100px]">
                    <p>
                      {item.grade_level} at {item.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
