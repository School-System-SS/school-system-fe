"use client";
import React, { useState, useEffect, use } from "react";
import TableOfTeachers from "./TableOfTeachers";
import AdminHeader from "../admin/adminHeader";
import Unauthorized from "../../components/Unauthorized";
import SideBar from "../admin/SideBar";

export default function page() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_supervisor")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          {/* <AdminHeader /> */}
          <SideBar />
          <TableOfTeachers />
        </section>
      )}
      {!showContent && (
        <Unauthorized />
      )}
    </>
  );
}
