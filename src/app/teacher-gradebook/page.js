"use client";

import "src/styles/general.css";
import ListViewAssignment from './Dashboard/ListViewAssignment'
import TeacherDashboardHeader from './Dashboard/TeacherDashboardHeader'
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
            <div class="teacher-page">
                <TeacherDashboardHeader />
                <ListViewAssignment />
            </div>
        </section>
              )}
              {!showContent && <Unauthorized />}
            </>
    );
}






