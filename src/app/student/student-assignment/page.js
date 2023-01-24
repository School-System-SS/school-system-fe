"use client";

import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../../components/Unauthorized";
import Assignment from "./assignment";
import SideBar from "../SideB";

export default function Page() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_student")));
  }, []);

  return (
    <section className="flex">
      <SideBar/>
      
      {showContent && <Assignment />}
      {!showContent && <Unauthorized />}
    </section >
  );
}
