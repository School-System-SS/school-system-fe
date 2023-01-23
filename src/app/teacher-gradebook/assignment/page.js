import React from 'react'
import SideBar from '../Dashboard/SideBar'
import TableAssignmentListOfTeacher from '../Dashboard/TableAssignmentListOfTeacher'
export default function Page() {


    return (
        <section className='flex'>
            <section className='h-full w-[20%] flex flex-row'>
                <SideBar />
            </section>
            <section className='flex items-stretch gap-4 mt-5l;'>
                <TableAssignmentListOfTeacher />
            </section>
        </section>
    )
}
