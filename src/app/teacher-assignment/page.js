"use client";

import TeacherDashboardHeader from "../teacher-gradebook/Dashboard/TeacherDashboardHeader";
import DiplayFormDataInTable from "./DiplayFormDataInTable";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../components/Unauthorized";

export default function view_assignment() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_teacher")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          {/* <TeacherDashboardHeader />. */}
          <DiplayFormDataInTable />
        </section>
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}
