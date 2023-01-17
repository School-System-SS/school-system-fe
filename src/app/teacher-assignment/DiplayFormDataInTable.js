"use client";
import React from 'react';
import AssignmentTeacherView from './AssignmentTView';
import Create_assignment from './CreateAssignment';
import { useState } from 'react';





export default function DiplayFormDataInTable(){
    const [tableData, setTableData] = useState([])
    const [formInputData, setformInputData] = useState(
     {
     Title:'',
     DueDate:''
     
    }
 );
 
 const tableRowRemove = (index) => {
    const dataRow = [...tableData];
    dataRow.splice(index, 1);
    setTableData(dataRow);
  };
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
 
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {Title:'', DueDate:''}
      setformInputData(emptyInput)
     }
 }  

    return(

        
        
        <section className="TeacherAssignment">
        <Create_assignment  handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} />
        <AssignmentTeacherView tableData={tableData}  tableRowRemove={tableRowRemove} />
        </section>
        
        

    )
}
