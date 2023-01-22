"use client";
import React from 'react';
import AssignmentTeacherView from './AssignmentTView';
import Create_assignment from './CreateAssignment';

export default function DiplayFormDataInTable() {

    return (
        <section>
            <Create_assignment  />
            <AssignmentTeacherView  />
        </section>



    )
}
