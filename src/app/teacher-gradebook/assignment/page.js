'use client'
import React, { useEffect } from 'react'
import SideBar from '../Dashboard/SideBar'
import { useRouter } from 'next/navigation'
import TableAssignmentListOfTeacher from '../Dashboard/TableAssignmentListOfTeacher'
export default function Page() {
    const router = useRouter();
    const x=1
    useEffect(() => {
        
    
        
    },[x])
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
