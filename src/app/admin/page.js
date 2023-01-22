"use client";

import "../../styles/admin.css";
import AdminHeader from "./adminHeader";
import DisplayCreate from "./DisplayCreate";
import React, { useState, useEffect, use } from "react";
import Unauthorized from "../../components/Unauthorized";


export default function AdminView() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_supervisor")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          <AdminHeader />
          <DisplayCreate />
        </section>
      )}
      {!showContent && (
        <Unauthorized />
      )}
      
    </>
  );
}
