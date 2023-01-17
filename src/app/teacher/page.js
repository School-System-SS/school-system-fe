"use client";
import React from 'react';
import HeaderPage from './HeaderPage';
import DiplayFormDataInTable from './DiplayFormDataInTable';
import "src/styles/general.css";
import ListViewAssignment from './Dashboard/ListViewAssignment'
import TeacherDashboardHeader from './Dashboard/TeacherDashboardHeader'






export default function view_assignment(){
   

    return(

        <>
        <HeaderPage/>
        <DiplayFormDataInTable/>
        <div class="teacher-page">
            

            <TeacherDashboardHeader/>
            <ListViewAssignment />
        </div>
        
        

        </>
    );
}


        
        


