'use client';
import React from "react";
import TeacherDashboardHeader from "../teacher-gradebook/Dashboard/TeacherDashboardHeader";
import Teacher_dashboard from "./Teacher_dashboard";

export default function TeacherDasborad() {
    return (
        <>
            <TeacherDashboardHeader />
            <Teacher_dashboard />
        </>
    )
}