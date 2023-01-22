"use client";

import React, { useState, useEffect, use } from "react";
import AdminClases from "./AdminClases";
import AdminHeader from "../admin/adminHeader";
import Unauthorized from "../../components/Unauthorized";

export default function page() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_supervisor")));
  }, []);

  return (
    <>
      {showContent && (
        <section>
          <AdminHeader />
          <AdminClases />
        </section>
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}
