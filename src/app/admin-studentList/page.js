"use client";

import "../../styles/admin.css";
import AdminHeader from "../admin/adminHeader";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../components/Unauthorized";
import CourseStudentList from "./courseStudent";
import SideBar from "../admin/SideBar";


export default function AdminView() {
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
            <CourseStudentList/>
          </section>
        )}
        {!showContent && (
          <Unauthorized />
        )}
        
        
      </>
    );
  }
  