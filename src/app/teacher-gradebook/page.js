"use client";
import React from 'react';


import "src/styles/general.css";
import ListViewAssignment from './Dashboard/ListViewAssignment'
import TeacherDashboardHeader from './Dashboard/TeacherDashboardHeader'






export default function view_assignment(){
   

    return(

        <>
        
        
        <div class="teacher-page">
            

            <TeacherDashboardHeader/>
            <ListViewAssignment />
        </div>
        
        
        

        </>
    );
}


        
        


