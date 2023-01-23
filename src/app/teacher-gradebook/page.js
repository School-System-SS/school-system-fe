"use client";
import ListViewAssignment from './Dashboard/ListViewAssignment'
import React, { useState, useEffect } from "react";

import Unauthorized from "../../components/Unauthorized";

export default function view_assignment() {
  const [showContent, setContent] = useState(false);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("is_teacher")));
  }, []);

  return (
    <>
      {showContent && (
        <ListViewAssignment />
      )}
      {!showContent && <Unauthorized />}
    </>
  );
}






