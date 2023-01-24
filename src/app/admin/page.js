"use client";

import "../../styles/admin.css";
import AdminHeader from "./adminHeader";
import DisplayCreate from "./DisplayCreate";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../components/Unauthorized";
import SideBar from "./SideBar";




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
          <DisplayCreate />
        </section>
      )}
      {!showContent && (
        <Unauthorized />
      )}
    
      
      
    </>
  );
}
