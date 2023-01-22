"use client";

import Student_dashborad from "./Student_dashborad";
import StudentHeader from "./StudentHeader";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../../components/Unauthorized";

export default function StudentDasborad() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_student")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          <StudentHeader />
          <Student_dashborad />
        </section>
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}
