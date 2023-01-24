"use client";

import Student_dashborad from "./Student_dashborad";
import StudentHeader from "./StudentHeader";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../../components/Unauthorized";
import SideBar from "../SideB";

export default function StudentDasborad() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_student")));
  }, []);

  return (
    <>
      {showContent && (
        <section className="flex">
          <SideBar/>
          <Student_dashborad />
          
        </section>
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}
