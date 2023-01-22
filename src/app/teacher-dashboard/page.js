"use client";

import TeacherDashboardHeader from "../teacher-gradebook/Dashboard/TeacherDashboardHeader";
import Teacher_dashboard from "./Teacher_dashboard";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../components/Unauthorized";

export default function TeacherDasborad() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_teacher")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          <TeacherDashboardHeader />
          <Teacher_dashboard />
        </section>
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}
