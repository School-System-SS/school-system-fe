'use client';
import TeacherDashboardHeader from "../teacher-gradebook/Dashboard/TeacherDashboardHeader";
import React from "react";
import DiplayFormDataInTable from "./DiplayFormDataInTable";

export default function view_assignment() {

    return (
        <>
            <TeacherDashboardHeader />
            <DiplayFormDataInTable />
        </>
    );
}